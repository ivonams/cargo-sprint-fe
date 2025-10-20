import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem", /* 9px */
        md: ".375rem", /* 6px */
        sm: ".1875rem", /* 3px */
      },
      colors: {
        // Flat / base colors (regular buttons)
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
          border: "var(--success-border)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
          border: "var(--warning-border)",
        },
        info: {
          DEFAULT: "hsl(var(--info) / <alpha-value>)",
          foreground: "hsl(var(--info-foreground) / <alpha-value>)",
          border: "var(--info-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        // Display (Lato)
        'display-lg': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px', fontWeight: '400' }],
        'display-lg-em': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px', fontWeight: '500' }],
        'display-md': ['45px', { lineHeight: '52px', letterSpacing: '0px', fontWeight: '400' }],
        'display-md-em': ['45px', { lineHeight: '52px', letterSpacing: '0px', fontWeight: '500' }],
        'display-sm': ['36px', { lineHeight: '44px', letterSpacing: '0px', fontWeight: '400' }],
        'display-sm-em': ['36px', { lineHeight: '44px', letterSpacing: '0px', fontWeight: '500' }],
        // Headline (Lato)
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '0px', fontWeight: '400' }],
        'headline-lg-em': ['32px', { lineHeight: '40px', letterSpacing: '0px', fontWeight: '500' }],
        'headline-md': ['28px', { lineHeight: '36px', letterSpacing: '0px', fontWeight: '400' }],
        'headline-md-em': ['28px', { lineHeight: '36px', letterSpacing: '0px', fontWeight: '500' }],
        'headline-sm': ['24px', { lineHeight: '32px', letterSpacing: '0px', fontWeight: '400' }],
        'headline-sm-em': ['24px', { lineHeight: '32px', letterSpacing: '0px', fontWeight: '500' }],
        // Title (Roboto)
        'title-lg': ['22px', { lineHeight: '28px', letterSpacing: '0px', fontWeight: '400' }],
        'title-lg-em': ['22px', { lineHeight: '28px', letterSpacing: '0px', fontWeight: '500' }],
        'title-md': ['16px', { lineHeight: '24px', letterSpacing: '0.15px', fontWeight: '400' }],
        'title-md-em': ['16px', { lineHeight: '24px', letterSpacing: '-0.25px', fontWeight: '500' }],
        'title-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.1px', fontWeight: '400' }],
        'title-sm-em': ['14px', { lineHeight: '20px', letterSpacing: '-0.1px', fontWeight: '500' }],
        // Body (Roboto)
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '-0.5px', fontWeight: '400' }],
        'body-lg-em': ['16px', { lineHeight: '24px', letterSpacing: '-0.5px', fontWeight: '500' }],
        'body-md': ['14px', { lineHeight: '20px', letterSpacing: '-0.25px', fontWeight: '400' }],
        'body-md-em': ['14px', { lineHeight: '20px', letterSpacing: '-0.25px', fontWeight: '500' }],
        'body-sm': ['12px', { lineHeight: '16px', letterSpacing: '-0.4px', fontWeight: '400' }],
        'body-sm-em': ['12px', { lineHeight: '16px', letterSpacing: '-0.4px', fontWeight: '500' }],
        // Label (Roboto)
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '-0.1px', fontWeight: '400' }],
        'label-lg-em': ['14px', { lineHeight: '20px', letterSpacing: '-0.1px', fontWeight: '500' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '-0.5px', fontWeight: '400' }],
        'label-md-em': ['12px', { lineHeight: '16px', letterSpacing: '-0.5px', fontWeight: '500' }],
        'label-sm': ['11px', { lineHeight: '16px', letterSpacing: '-0.5px', fontWeight: '400' }],
        'label-sm-em': ['11px', { lineHeight: '16px', letterSpacing: '-0.5px', fontWeight: '500' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
