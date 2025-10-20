# Design Guidelines: HelloWorld React App

## Design Approach
**System:** Material Design principles with modern minimalism
**Rationale:** For a boilerplate starter app, we need clean, professional aesthetics that serve as a flexible foundation without overwhelming simplicity with unnecessary complexity.

## Core Design Elements

### A. Color Palette (Sprint DS)
The color system is based on the Sprint Design System with a teal/cyan color palette.

**Sprint DS Primary Color Scale:**
- primary-100: #F6FFFF (Lightest)
- primary-98: #EDFCFF
- primary-95: #D0F8FF
- primary-90: #9FEFFD
- primary-80: #83D3E0
- primary-70: #67B7C4
- primary-60: #4B9CA9
- primary-50: #2C828F (Main primary for light mode)
- primary-40: #016C78
- primary-35: #005B66
- primary-30: #004F58
- primary-25: #00424A
- primary-20: #00363D
- primary-15: #002B30
- primary-10: #001F24
- primary-5: #001417
- primary-0: #000000 (Darkest)

**Light Mode (HSL):**
- Primary: 189 53% 37% (#2C828F - primary-50)
- Primary Foreground: 180 100% 98% (#F6FFFF - primary-100)
- Background: 0 0% 98%
- Foreground (text): 187 100% 12% (#00363D - primary-20)
- Border: 189 30% 90%
- Card: 0 0% 96%
- Secondary: 189 30% 88%
- Accent: 189 30% 88%

**Dark Mode (HSL):**
- Primary: 188 60% 70% (#83D3E0 - primary-80)
- Primary Foreground: 187 100% 5% (#001417 - primary-5)
- Background: 187 100% 5%
- Foreground (text): 189 96% 90% (#9FEFFD - primary-90)
- Border: 187 50% 20%
- Card: 187 100% 8%
- Secondary: 187 50% 18%
- Accent: 187 50% 18%

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