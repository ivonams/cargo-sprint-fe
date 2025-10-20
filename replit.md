# Project Overview

## Overview

This is a full-stack React TypeScript boilerplate application built with modern web development tools. It serves as a starter template for building web applications with a clean, professional foundation. The application features a simple "Hello World" welcome page with theme switching capabilities and is designed to be easily extensible for building more complex features.

## User Preferences

Preferred communication style: Simple, everyday language.

## Development Guidelines

This project follows best practices from several guideline documents:

- **bulletproof-react-guidelines.md**: Comprehensive React development patterns covering project structure, component design, state management, API layer, performance, security, error handling, and testing strategies. Reference this file when building new features or refactoring existing code.
- **design_guidelines.md**: Visual design system including colors, typography, spacing, and component styling. Reference this file when implementing UI components.

## System Architecture

### Frontend Architecture

**React with TypeScript**: The application uses React 18+ with TypeScript for type-safe component development, organized in a standard `client/src` directory structure.

**Build System - Vite**: Vite serves as the build tool and development server, providing fast hot module replacement (HMR) and optimized production builds. The frontend is configured to build to `dist/public`.

**Routing - Wouter**: Implements client-side routing using Wouter, a lightweight alternative to React Router. Routes are defined in `App.tsx` with a simple Switch/Route pattern.

**State Management - TanStack Query**: Uses TanStack Query (React Query) for server state management, with custom query functions configured for API communication including credential-based requests.

**UI Framework - shadcn/ui + Tailwind CSS**: 
- Uses the shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theming support (light/dark mode)
- Material Design principles with modern minimalism aesthetic

**Theme System**: Custom theme provider supporting light/dark modes with localStorage persistence. Theme state is managed through React Context and applies CSS classes to the document root.

### Backend Architecture

**Node.js with Express**: Express server handles API routes and serves the built frontend application in production.

**Development Mode**: In development, Vite middleware is integrated into Express for seamless HMR and development experience.

**Storage Layer**: Implements a storage interface (`IStorage`) with an in-memory implementation (`MemStorage`) for user data. This abstraction allows easy swapping to database-backed storage.

**Logging**: Custom logging middleware captures API request/response cycles with timing information.

### Data Storage

**Database Schema - Drizzle ORM**: 
- Uses Drizzle ORM for type-safe database operations
- Configured for PostgreSQL dialect
- Schema defined in `shared/schema.ts` with a users table
- Migrations output to `./migrations` directory
- Currently using Neon Database serverless driver (`@neondatabase/serverless`)

**Session Management**: Configured to use `connect-pg-simple` for PostgreSQL-backed session storage.

**In-Memory Fallback**: Includes a memory-based storage implementation for development/testing without requiring database setup.

### External Dependencies

**Database**: 
- PostgreSQL (via Neon serverless driver)
- Connection configured through `DATABASE_URL` environment variable
- Drizzle ORM for schema management and queries

**UI Component Libraries**:
- Radix UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, etc.)
- Embla Carousel for carousel functionality
- Lucide React for icons
- Vaul for drawer components

**Validation & Forms**:
- Zod for runtime type validation
- Drizzle-Zod for schema-to-Zod conversion
- React Hook Form with Hookform Resolvers for form management

**Styling**:
- Tailwind CSS with PostCSS
- class-variance-authority for component variants
- clsx and tailwind-merge (via cn utility) for conditional classes

**Development Tools**:
- TypeScript for type checking
- TSX for running TypeScript files
- ESBuild for production server builds
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal) for enhanced development experience

**Utilities**:
- date-fns for date manipulation
- cmdk for command palette functionality
- nanoid for unique ID generation

The architecture follows a monorepo structure with shared types between client and server, enabling end-to-end type safety across the full stack.