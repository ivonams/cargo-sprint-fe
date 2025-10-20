# Design Guidelines: HelloWorld React App

## Design Approach
**System:** Material Design principles with modern minimalism
**Rationale:** For a boilerplate starter app, we need clean, professional aesthetics that serve as a flexible foundation without overwhelming simplicity with unnecessary complexity.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 220 70% 50% (Modern blue)
- Background: 0 0% 98%
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 50%
- Border: 220 15% 90%

**Dark Mode:**
- Primary: 220 70% 60%
- Background: 220 15% 10%
- Text Primary: 220 15% 95%
- Text Secondary: 220 10% 70%
- Border: 220 15% 25%

### B. Typography
- **Font Family:** Inter (Google Fonts) for all text
- **Headings:** 
  - H1: 48px/56px, font-weight 700
  - H2: 24px/32px, font-weight 600
- **Body:** 16px/24px, font-weight 400
- **Code:** JetBrains Mono for inline code snippets

### C. Layout System
- **Spacing Units:** Use Tailwind units of 4, 8, 16, 24
- **Container:** max-w-4xl centered with px-4
- **Vertical Rhythm:** py-16 for main content section

### D. Component Library

**Main Container:**
- Full viewport height (min-h-screen)
- Centered content with flex
- Smooth background gradient from primary/5 to primary/10

**Welcome Card:**
- Clean white card (dark mode: dark background) with subtle shadow
- Rounded corners (rounded-2xl)
- Padding: p-12
- Maximum width: max-w-2xl

**Content Elements:**
- Logo/Icon: 64x64px React logo with subtle animation (slow spin)
- Heading: Large, bold "Hello World" with gradient text effect
- Subheading: Muted color explaining the boilerplate nature
- Code snippet: Inline code with subtle background and monospace font
- Quick start list: Minimal bullet points with proper spacing

**Dark Mode Toggle:**
- Floating button in top-right corner
- Icon-only (sun/moon)
- Smooth transition between modes

### E. Interactions
- Hover states: Subtle scale (scale-105) on interactive elements
- Transitions: 200ms ease for all state changes
- No elaborate animations - keep it minimal and professional

## Layout Structure

**Single Page Application:**
```
┌─────────────────────────────────────┐
│  [Dark Mode Toggle - Top Right]     │
│                                      │
│         ┌──────────────┐            │
│         │ React Icon   │            │
│         └──────────────┘            │
│                                      │
│      Hello World (gradient)         │
│   A Simple React TypeScript App     │
│                                      │
│    • Get started: npm run dev       │
│    • Edit src/App.tsx               │
│    • Build: npm run build           │
│                                      │
│   [View Documentation Button]       │
│                                      │
└─────────────────────────────────────┘
```

## Key Principles
- **Minimal but Polished:** Clean design that doesn't distract from code
- **Developer-Friendly:** Clear hierarchy, readable typography
- **Theme Aware:** Seamless dark/light mode support
- **Performance:** No heavy assets, smooth transitions only
- **Scalable Foundation:** Easy to extend without redesigning

## Images
**No hero image required** - This is a code-focused boilerplate where simplicity and clarity are paramount. Use the React logo SVG icon as the primary visual element.