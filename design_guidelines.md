# Design Guidelines: HelloWorld React App

## Design Approach
**System:** Material Design principles with modern minimalism
**Rationale:** For a boilerplate starter app, we need clean, professional aesthetics that serve as a flexible foundation without overwhelming simplicity with unnecessary complexity.

## Core Design Elements

### A. Color Palette (Sprint DS)
The color system is based on the Sprint Design System with a comprehensive multi-palette approach.

**Color Philosophy:**
- **Primary (Teal/Cyan):** Core brand identity for main actions and key UI elements
- **Secondary (Blue):** Supporting elements, headers, navigation
- **Tertiary (Green):** Additional UI variety for charts and tags
- **Error (Red):** Error states and destructive actions
- **Info (Blue):** Informational messages and tooltips
- **Success (Green):** Success states and confirmations
- **Warning (Orange/Amber):** Cautionary states and alerts
- **Neutral (Grays):** Text, backgrounds, and structural elements
- **Neutral Variants:** Subtle backgrounds and dividers with green tint

**Primary Color Scale (Teal/Cyan):**
- primary-100 → primary-0: #FFFFFF → #000000
- Key tokens: primary-50 (#2C828F - light mode), primary-80 (#83D3E0 - dark mode)

**Secondary Color Scale (Blue):**
- secondary-99 → secondary-0: #FEFBFF → #000000
- Usage: Headers, navigation, supporting UI

**Error Color Scale (Red):**
- error-100 → error-0: #FFFFFF → #000000
- Key token: error-50 (#DE3730)

**Success Color Scale (Green):**
- success-100 → success-0: #FFFFFF → #000000
- Key token: success-50 (#21893B)

**Warning Color Scale (Orange/Amber):**
- warning-100 → warning-0: #FFFFFF → #000000
- Key token: warning-50 (#BF5F17)

**Info Color Scale (Blue):**
- info-100 → info-0: #FFFFFF → #000000
- Key token: info-50 (#2872E2)

**Neutral Color Scale (Grays):**
- neutral-100 → neutral-0: #FFFFFF → #000000
- Usage: Text, backgrounds, structural UI

**Neutral Variants Color Scale:**
- neutralVariants-100 → neutralVariants-0: #FFFFFF → #000000
- Usage: Subtle backgrounds and dividers with green tint

**Semantic Token Mapping:**

**Light Mode:**
- Primary: 189 53% 37% (#2C828F)
- Background: 0 0% 98%
- Foreground: 187 100% 12% (#00363D)
- Success: 130 63% 33% (#21893B)
- Error: 3 78% 52% (#DE3730)
- Warning: 26 78% 42% (#BF5F17)
- Info: 218 72% 53% (#2872E2)

**Dark Mode:**
- Primary: 188 60% 70% (#83D3E0)
- Background: 187 100% 5% (#001417)
- Foreground: 189 96% 90% (#9FEFFD)
- Success: 130 67% 48% (#41A452)
- Error: 3 78% 59% (#FF5449)
- Warning: 28 93% 64% (#F99748)
- Info: 218 100% 59% (#4D8EFF)

**Color Guidelines:**
- Use primary colors for main actions and brand elements
- Use semantic colors (success, error, warning, info) for status communication
- Maintain 4.5:1 minimum contrast ratio for accessibility
- Refer to `shared/sprint-ds-colors.ts` for complete color token reference

### B. Typography (Sprint DS)

The typography system uses two font families following Material Design 3 guidelines:

**Font Families:**
- **Lato:** Used for Display and Headline text to maintain visual hierarchy
- **Roboto:** Used for Title, Body, and Label text, paragraphs, and UI components

**Typography Scale:**

**Display (Lato):**
- Display Large: 57px / 64px line-height, Regular (400) or Medium (500), -0.25px letter-spacing
- Display Medium: 45px / 52px line-height, Regular (400) or Medium (500), 0px letter-spacing
- Display Small: 36px / 42-44px line-height, Regular (400) or Medium (500), 0px letter-spacing

**Headline (Lato):**
- Headline Large: 30-32px / 40px line-height, Regular (400) or Medium (500), 0px letter-spacing
- Headline Medium: 28px / 36px line-height, Regular (400) or Medium (500), 0px letter-spacing
- Headline Small: 24px / 32px line-height, Regular (400) or Medium (500), 0px letter-spacing

**Title (Roboto):**
- Title Large: 22px / 28px line-height, Regular (400) or Medium (500), 0px letter-spacing
- Title Medium: 16px / 24px line-height, Regular (400) or Medium (500), 0.15px/-0.25px letter-spacing
- Title Small: 14px / 20px line-height, Regular (400) or Medium (500), 0.1px/-0.1px letter-spacing

**Body (Roboto):**
- Body Large: 16px / 24px line-height, Regular (400) or Medium (500), -0.5px letter-spacing
- Body Medium: 14px / 20px line-height, Regular (400) or Medium (500), -0.25px letter-spacing
- Body Small: 12px / 16px line-height, Regular (400) or Medium (500), -0.4px letter-spacing

**Label (Roboto):**
- Label Large: 14px / 20px line-height, Regular (400) or Medium (500), -0.1px letter-spacing
- Label Medium: 12px / 16px line-height, Regular (400) or Medium (500), -0.5px letter-spacing
- Label Small: 11px / 16px line-height, Regular (400) or Medium (500), -0.5px letter-spacing

**Typography Guidelines:**
- Use Medium weight (500) sparingly for emphasis
- Maintain consistent alignment patterns throughout the interface
- Follow the type scale for readability and visual hierarchy
- Use Lato for large, attention-grabbing text
- Use Roboto for all UI components and body content

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