/**
 * CargoSprint DS Spacing System
 * Based on Material Design 3 - 8px baseline grid
 * 
 * Usage: These spacing tokens ensure consistent spacing throughout the application.
 * All values are multiples of 4px or 8px for optimal visual rhythm.
 * 
 * Touch Targets:
 * - Minimum interactive element size: 48x48px (space-12)
 * - Minimum spacing between touch targets: 8px (space-2)
 * 
 * Layout Guidelines:
 * - Screen edge margins (mobile): 16px (space-4)
 * - Screen edge margins (tablet/desktop): 24px (space-6)
 * - Card padding: 24px (space-6) or 32px (space-8)
 * - Content margins: 72px (space-18) or 80px (space-20)
 */

export const sprintDSSpacing = {
  // Micro spacing - Use sparingly for very tight layouts
  micro: '2px',          // 0.25x base unit
  
  // Extra small - Very tight spacing
  xs: '4px',             // 0.5x base unit
  
  // Small - Base unit for small gaps
  sm: '8px',             // 1x base unit (BASE)
  
  // Small-Medium - Between small elements
  'sm-md': '12px',       // 1.5x base unit
  
  // Medium - Default spacing
  md: '16px',            // 2x base unit (COMMON)
  
  // Medium-Large - Medium spacing
  'md-lg': '20px',       // 2.5x base unit
  
  // Large - Section spacing
  lg: '24px',            // 3x base unit (COMMON)
  
  // Extra Large - Large spacing
  xl: '32px',            // 4x base unit (COMMON)
  
  // 2XL - Extra large spacing
  '2xl': '40px',         // 5x base unit
  
  // 3XL - Minimum touch target
  '3xl': '48px',         // 6x base unit (TOUCH TARGET)
  
  // 4XL - Large touch target
  '4xl': '56px',         // 7x base unit
  
  // 5XL - Extra large spacing
  '5xl': '64px',         // 8x base unit
  
  // 6XL - Content margins
  '6xl': '72px',         // 9x base unit
  
  // 7XL - Major sections
  '7xl': '80px',         // 10x base unit
  
  // 8XL - Large sections
  '8xl': '96px',         // 12x base unit
  
  // 9XL - Extra large sections
  '9xl': '128px',        // 16x base unit
} as const;

/**
 * Common spacing use cases
 */
export const spacingUseCases = {
  // Component internal spacing
  componentPadding: {
    tight: sprintDSSpacing.sm,      // 8px - Compact components
    default: sprintDSSpacing.md,    // 16px - Standard components
    relaxed: sprintDSSpacing.lg,    // 24px - Spacious components
    loose: sprintDSSpacing.xl,      // 32px - Extra spacious
  },
  
  // Gap between elements
  elementGap: {
    tight: sprintDSSpacing.xs,      // 4px - Very close elements
    default: sprintDSSpacing.sm,    // 8px - Standard gap
    relaxed: sprintDSSpacing.md,    // 16px - Comfortable gap
    loose: sprintDSSpacing.lg,      // 24px - Spacious gap
  },
  
  // Section spacing
  sectionSpacing: {
    compact: sprintDSSpacing.lg,    // 24px - Tight sections
    default: sprintDSSpacing.xl,    // 32px - Standard sections
    relaxed: sprintDSSpacing['2xl'], // 40px - Comfortable sections
    loose: sprintDSSpacing['3xl'],  // 48px - Spacious sections
  },
  
  // Touch targets
  touchTarget: {
    minimum: sprintDSSpacing['3xl'], // 48px - Minimum size
    comfortable: sprintDSSpacing['4xl'], // 56px - Comfortable size
    large: sprintDSSpacing['5xl'],   // 64px - Large touch target
  },
  
  // Screen margins
  screenMargin: {
    mobile: sprintDSSpacing.md,      // 16px - Mobile screens
    tablet: sprintDSSpacing.lg,      // 24px - Tablet screens
    desktop: sprintDSSpacing.xl,     // 32px - Desktop screens
  },
} as const;

export type SpacingToken = keyof typeof sprintDSSpacing;
export type SpacingValue = typeof sprintDSSpacing[SpacingToken];
