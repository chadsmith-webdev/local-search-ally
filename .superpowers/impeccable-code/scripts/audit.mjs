import fs from 'fs';
import path from 'path';

const ARGS = process.argv.slice(2);
const FIX = ARGS.includes('--fix');
const TARGET_PATH = ARGS.find(arg => !arg.startsWith('--')) || '.';

const RULES = [
  {
    name: 'No console.log',
    regex: /console\.log\(.*?\);?/g,
    message: 'Remove console.log statements before committing.',
    fixable: true,
    fix: (content) => content.replace(/console\.log\(.*?\);?/g, ''),
  },
  {
    name: 'No debugger',
    regex: /debugger;?/g,
    message: 'Remove debugger statements.',
    fixable: true,
    fix: (content) => content.replace(/debugger;?/g, ''),
  },
  {
    name: 'Missing alt attribute',
    regex: /<(img|Image)(?![^>]*\balt=)[^>]*>/g,
    message: 'Images must have an alt attribute for accessibility.',
    fixable: true,
    fix: (content) => content.replace(/<(img|Image)(?![^>]*\balt=)([^>]*?)(\/?)>/g, '<$1$2 alt=""$3>'),
  },
  {
    name: 'Trailing whitespace',
    regex: /[ \t]+$/gm,
    message: 'Remove trailing whitespace.',
    fixable: true,
    fix: (content) => content.replace(/[ \t]+$/gm, ''),
  },
  {
    name: 'Hardcoded Secrets (Potential)',
    regex: /(password|secret|apikey|token)["']?\s*[:=]\s*["']([^"']{10,})["']/gi,
    message: 'Potential secret detected. Use environment variables.',
    fixable: false,
  }
];

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let findings = [];

  RULES.forEach(rule => {
    const matches = content.match(rule.regex);
    if (matches) {
      findings.push({
        rule: rule.name,
        count: matches.length,
        message: rule.message,
        fixable: rule.fixable
      });

      if (FIX && rule.fixable) {
        newContent = rule.fix(newContent);
      }
    }
  });

  // Large file check
  const lines = content.split('\n');
  if (lines.length > 500) {
    findings.push({
      rule: 'Large File',
      count: 1,
      message: `File has ${lines.length} lines. Consider breaking it into smaller components.`,
      fixable: false
    });
  }

  if (findings.length > 0) {
    console.log(`\nAudit results for: ${filePath}`);
    findings.forEach(f => {
      console.log(`[${f.rule}] ${f.count} instance(s) found. ${f.message}`);
    });

    if (FIX && newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`FIXED: Applied ${findings.filter(f => f.fixable).length} fixes.`);
    }
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        processDirectory(fullPath);
      }
    } else if (/\.(js|jsx|ts|tsx|mdx)$/.test(file)) {
      auditFile(fullPath);
    }
  });
}

if (fs.statSync(TARGET_PATH).isDirectory()) {
  processDirectory(TARGET_PATH);
} else {
  auditFile(TARGET_PATH);
}
