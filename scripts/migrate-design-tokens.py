#!/usr/bin/env python3
"""
Design System Migration — Local Search Ally
Migrates from old (--carolina, --bg, --text, etc.) to new namespaced
(--color-brand, --color-bg, --color-text, etc.) token system.

Run from project root:
  python3 scripts/migrate-design-tokens.py
"""

import os
import re

SRC_DIR = '/Users/chadsmith/local-search-ally/src'
DESIGN_SYSTEM_DIR = os.path.join(SRC_DIR, 'app/design-system')

# ─── 1. Token rename patterns for CSS module files ────────────────────────────
# Order is critical — specific variants must come before base patterns.

TOKEN_RENAMES = [
    # Carolina — variants before base
    (r'var\(--carolina-dark',          'var(--color-brand-dark'),
    (r'var\(--carolina-dim',           'var(--color-brand-dim'),
    (r'var\(--carolina-light',         'var(--color-brand'),    # no -light in new system
    (r'var\(--carolina(?![-a-z])',     'var(--color-brand'),    # bare --carolina
    # Surface — surface2 before surface
    (r'var\(--surface2',               'var(--color-surface-2'),
    (r'var\(--surface(?![-a-z2])',     'var(--color-surface'),
    # Border — --border-strong before bare --border
    (r'var\(--border-strong',          'var(--color-border-strong'),
    (r'var\(--border(?![-a-z])',       'var(--color-border'),
    # Text (bare --text only — leaves --text-xs, --text-sm, etc. untouched)
    (r'var\(--text(?![-a-z])',         'var(--color-text)'),   # NOTE: trailing ')' is added by replacement
    # Background
    (r'var\(--bg(?![-a-z])',           'var(--color-bg'),
    # Muted
    (r'var\(--muted(?![-a-z])',        'var(--color-text-muted'),
    # Status
    (r'var\(--red(?![-a-z])',          'var(--color-status-error'),
    (r'var\(--green(?![-a-z])',        'var(--color-status-success'),
    (r'var\(--yellow(?![-a-z])',       'var(--color-status-warning'),
    # Spacing
    (r'var\(--page-gutter(?![-a-z])',  'var(--space-page-gutter'),
    (r'var\(--section-spacing',        'var(--space-section'),
]

# Fix the --text pattern replacement: should not add an extra closing paren
# The pattern var(--text(?![-a-z]) matches "var(--text" without closing paren,
# and replacement is "var(--color-text)" which already includes it — WRONG.
# We need to keep the character that follows --text (could be "," or ")").
# Override this entry to not include closing paren in replacement:
TOKEN_RENAMES = [
    (r'var\(--carolina-dark',          'var(--color-brand-dark'),
    (r'var\(--carolina-dim',           'var(--color-brand-dim'),
    (r'var\(--carolina-light',         'var(--color-brand'),
    (r'var\(--carolina(?![-a-z])',     'var(--color-brand'),
    (r'var\(--surface2',               'var(--color-surface-2'),
    (r'var\(--surface(?![-a-z2])',     'var(--color-surface'),
    (r'var\(--border-strong',          'var(--color-border-strong'),
    (r'var\(--border(?![-a-z])',       'var(--color-border'),
    (r'var\(--text(?![-a-z])',         'var(--color-text'),
    (r'var\(--bg(?![-a-z])',           'var(--color-bg'),
    (r'var\(--muted(?![-a-z])',        'var(--color-text-muted'),
    (r'var\(--red(?![-a-z])',          'var(--color-status-error'),
    (r'var\(--green(?![-a-z])',        'var(--color-status-success'),
    (r'var\(--yellow(?![-a-z])',       'var(--color-status-warning'),
    (r'var\(--page-gutter(?![-a-z])',  'var(--space-page-gutter'),
    (r'var\(--section-spacing',        'var(--space-section'),
]


def rename_tokens(content):
    for pattern, replacement in TOKEN_RENAMES:
        content = re.sub(pattern, replacement, content)
    return content


# ─── Step 1: Rename tokens in all CSS module files ────────────────────────────

changed_css = []
for root, dirs, files in os.walk(SRC_DIR):
    if 'design-system' in root:
        continue
    for filename in sorted(files):
        if filename.endswith('.module.css'):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r') as f:
                original = f.read()
            updated = rename_tokens(original)
            if updated != original:
                with open(filepath, 'w') as f:
                    f.write(updated)
                changed_css.append(filepath.replace(SRC_DIR + '/', ''))

print(f'\n[1/4] Token renames in CSS modules: {len(changed_css)} files changed')
for f in sorted(changed_css):
    print(f'      {f}')


# ─── Step 2: Fix composes: container-cinematic → container ────────────────────

changed_composes = []
for root, dirs, files in os.walk(SRC_DIR):
    if 'design-system' in root:
        continue
    for filename in sorted(files):
        if filename.endswith('.css'):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r') as f:
                original = f.read()
            updated = original.replace(
                'composes: container-cinematic from global',
                'composes: container from global'
            )
            if updated != original:
                with open(filepath, 'w') as f:
                    f.write(updated)
                changed_composes.append(filepath.replace(SRC_DIR + '/', ''))

print(f'\n[2/4] Fixed composes in CSS modules: {len(changed_composes)} files changed')
for f in sorted(changed_composes):
    print(f'      {f}')


# ─── Step 3: Build new globals.css ────────────────────────────────────────────

def strip_md_escapes(text):
    """Remove backslash escapes added for markdown rendering compatibility.
    e.g. \* → *, \-- → --, \[ → [, \{ → {
    """
    return re.sub(r'\\(.)', r'\1', text)


tokens_path = os.path.join(DESIGN_SYSTEM_DIR, 'lsa-design-tokens.md')
components_path = os.path.join(DESIGN_SYSTEM_DIR, 'lsa-components.md')

with open(tokens_path, 'r') as f:
    tokens_raw = strip_md_escapes(f.read())

with open(components_path, 'r') as f:
    components_raw = strip_md_escapes(f.read())

# Blog/FAQ-specific global styles to preserve (not in new design system files)
# Updated to use new token names.
PRESERVED_STYLES = """
/* ─── Blog index editorial intro ─────────────────────────────────────────────
   Server-rendered section above BlogClient — visible to crawlers on first byte
   ─────────────────────────────────────────────────────────────────────────── */
.blog-intro-wrap {
  width: 100%;
  padding: clamp(3rem, 6vw, 5rem) var(--space-page-gutter) clamp(2rem, 4vw, 3rem);
  border-bottom: 1px solid var(--color-border);
}

.blog-intro-inner {
  max-width: 760px;
  margin: 0 auto;
}

.blog-intro-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-brand);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.7;
  margin-bottom: 1rem;
}

.blog-intro-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.blog-intro-body {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.blog-intro-body a {
  color: var(--color-brand);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.blog-intro-body a:hover {
  color: var(--color-brand-dark);
}

/* ─── FAQ layout ─────────────────────────────────────────────────────────── */
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

@media (min-width: 1024px) {
  .faq-grid {
    grid-template-columns: 0.8fr 1.2fr;
  }
}
"""

# Combine: tokens (includes @import + :root + @theme) then components then preserved
new_globals = (
    tokens_raw.rstrip()
    + '\n\n'
    + components_raw.strip()
    + '\n'
    + PRESERVED_STYLES
)

globals_path = os.path.join(SRC_DIR, 'app/globals.css')
with open(globals_path, 'w') as f:
    f.write(new_globals)

print(f'\n[3/4] Written new globals.css ({len(new_globals):,} chars)')


# ─── Step 4: Fix Tailwind utility classes in JSX files ────────────────────────

JSX_RENAMES = [
    (r'\btext-carolina\b',  'text-brand'),
    (r'\btext-muted\b',     'text-text-muted'),
    (r'\btext-red\b',       'text-status-error'),
    (r'\btext-green\b',     'text-status-success'),
]

JSX_FILES = [
    os.path.join(SRC_DIR, 'app/privacy/page.js'),
    os.path.join(SRC_DIR, 'app/terms/page.js'),
    os.path.join(SRC_DIR, 'components/GbpChecklistClient.jsx'),
]

changed_jsx = []
for filepath in JSX_FILES:
    with open(filepath, 'r') as f:
        original = f.read()
    updated = original
    for pattern, replacement in JSX_RENAMES:
        updated = re.sub(pattern, replacement, updated)
    if updated != original:
        with open(filepath, 'w') as f:
            f.write(updated)
        changed_jsx.append(filepath.replace(SRC_DIR + '/', ''))

print(f'\n[4/4] Fixed Tailwind classes in JSX: {len(changed_jsx)} files changed')
for f in changed_jsx:
    print(f'      {f}')

print('\n✓ Migration complete.\n')
print('Next steps:')
print('  1. Run: npm run build  (check for compile errors)')
print('  2. Run: npm run dev    (visual check in browser)')
print('  3. Verify: no old token names remain:')
print('     grep -r "var(--carolina\\|var(--bg\\|var(--text\\|var(--muted\\|var(--border[^-]" src/ --include="*.css" | grep -v "globals.css"')
