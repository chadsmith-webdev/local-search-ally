# Skill: Impeccable Code
Description: High-fidelity audit and correction directives for creating maintainable, accessible, and high-performance code across all languages.

## Core Principles
1. **DRY (Don't Repeat Yourself)**: Eliminate redundancy without over-abstracting.
2. **SOLID**: Follow single-responsibility and dependency inversion.
3. **KISS (Keep It Simple, Stupid)**: Clarity over cleverness.
4. **Accessibility (A11y)**: Code that works for everyone by default.
5. **Mobile-First**: Design for the smallest screen first, then scale.

## Language-Specific Rules

### JavaScript & React
- **Naming**: Use `camelCase` for variables/functions and `PascalCase` for components.
- **State Management**: Prefer local state and derived values over complex hooks or context.
- **Hook Rules**: Avoid unnecessary `useEffect`. Use custom hooks for shared logic.
- **Error Handling**: Always use `try/catch` in async functions and define fallback UI.
- **Performance**: Use `memo`, `useMemo`, and `useCallback` only when profiling shows they are needed.

### TypeScript
- **Strictness**: Avoid `any`. Use `unknown` and type guards if necessary.
- **Interfaces vs Types**: Prefer `interface` for public APIs and `type` for local unions/intersections.
- **Enums**: Avoid TypeScript enums; use `const enum` or literal unions.

### CSS & Tailwind
- **Utility-First**: Use Tailwind utilities first. Only use CSS modules (`.module.css`) for rare, complex layouts.
- **Spacing**: Use consistent spacing tokens (e.g., `gap-4`, `p-8`).
- **Responsive**: Always start with mobile styles (e.g., `text-sm`) and add larger breakpoints (`md:text-lg`).
- **Theming**: Use variables or theme context for colors (e.g., `text-carolina` instead of hex codes).

### HTML & A11y
- **Landmarks**: Use `<header>`, `<main>`, `<nav>`, and `<footer>`.
- **Forms**: Every input MUST have a `<label>`.
- **Images**: Every `<img>` or `Image` MUST have an `alt` attribute. If decorative, use `alt=""`.
- **Buttons**: Use `<button>` for actions, NOT `<a>`. Use `aria-label` if clear text is missing.

## Audit Workflow
1. **Heuristic Check**: Scan for obvious anti-patterns (e.g., magic numbers, console logs, deeply nested loops).
2. **Readability Audit**: Can a junior developer understand this code in 30 seconds?
3. **Accessibility Audit**: Check landmarks, tab indexes, and screen reader compatibility.
4. **Performance Audit**: Look for heavy re-renders, unoptimized images, or blocking JS.

## Correction Workflow
1. **Refactor**: Suggest a cleaner version of the code that maintains functionality.
2. **Auto-fix**: Apply the fixes automatically where possible (e.g., adding `alt` tags, removing logs).
3. **Verify**: Ensure the corrected code follows the core principles.
