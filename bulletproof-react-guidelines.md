# Bulletproof React Guidelines

This document contains best practices and guidelines for building scalable, maintainable React applications based on the [bulletproof-react](https://github.com/alan2207/bulletproof-react) methodology.

---

## 🗄️ Project Structure

### Core Principle: Feature-Based Organization

Organize code by features rather than technical layers. Each feature contains everything it needs in one place.

```
src/
├── app/                 # Application layer
│   ├── routes/          # Application routes/pages
│   ├── app.tsx          # Main application component
│   ├── provider.tsx     # Global providers wrapper
│   └── router.tsx       # Router configuration
├── assets/              # Static files (images, fonts)
├── components/          # Shared components used across features
├── config/              # Global configurations, env variables
├── features/            # Feature-based modules (main code lives here)
├── hooks/               # Shared hooks
├── lib/                 # Reusable libraries preconfigured for the app
├── stores/              # Global state stores
├── testing/             # Test utilities and mocks
├── types/               # Shared TypeScript types
└── utils/               # Shared utility functions
```

### Feature Structure

Each feature should be self-contained:

```
src/features/my-feature/
├── api/          # API calls and hooks for this feature
├── assets/       # Feature-specific static files
├── components/   # Feature-specific components
├── hooks/        # Feature-specific hooks
├── stores/       # Feature-specific state
├── types/        # Feature-specific types
└── utils/        # Feature-specific utilities
```

**Important:**
- Don't create all folders for every feature - only add what you need
- Avoid cross-feature imports - compose features at the application level
- Import files directly, not through barrel files (better for tree-shaking)

### Enforcing Architecture with ESLint

Prevent cross-feature imports:

```javascript
'import/no-restricted-paths': [
  'error',
  {
    zones: [
      // Disallow cross-feature imports
      {
        target: './src/features/auth',
        from: './src/features',
        except: ['./auth'],
      },
      // Add more features...
    ],
  },
]
```

Enforce unidirectional codebase (shared → features → app):

```javascript
'import/no-restricted-paths': [
  'error',
  {
    zones: [
      // Features cannot import from app
      {
        target: './src/features',
        from: './src/app',
      },
      // Shared modules cannot import from features/app
      {
        target: [
          './src/components',
          './src/hooks',
          './src/lib',
          './src/types',
          './src/utils',
        ],
        from: ['./src/features', './src/app'],
      },
    ],
  },
]
```

---

## ⚙️ Project Standards

### ESLint

Configure ESLint to catch errors and enforce consistency:
- Set up rules in `.eslintrc.js`
- Catch common errors early
- Enforce uniform coding practices

### Prettier

Enable "format on save" for automatic code formatting:
- Configure rules in `.prettierrc`
- Ensures consistent code style
- Failed formatting indicates syntax errors

### TypeScript

Use TypeScript for type safety:
- Catches issues during refactoring
- Update type declarations first, then fix errors
- Provides build-time checking (not runtime protection)
- See [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Husky

Use git hooks to validate code before commits:
- Run linting before each commit
- Perform code formatting checks
- Execute type checking
- Prevents faulty code from being pushed

### Absolute Imports

Configure absolute imports with `@` alias:

**jsconfig.json or tsconfig.json:**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Benefits:**
- Import from `@/components/my-component` instead of `../../../components/my-component`
- Files can be moved without breaking imports
- Clear distinction from `node_modules`

### File Naming Conventions

Use ESLint to enforce naming:

```javascript
'check-file/filename-naming-convention': [
  'error',
  {
    '**/*.{ts,tsx}': 'KEBAB_CASE',
  },
  {
    ignoreMiddleExtensions: true,
  },
],
'check-file/folder-naming-convention': [
  'error',
  {
    'src/**/!(__tests__)': 'KEBAB_CASE',
  },
],
```

---

## 🧱 Components and Styling

### Component Best Practices

#### 1. Colocate Code Close to Usage

Keep components, functions, styles, and state near where they're used:
- Improves readability
- Reduces unnecessary re-renders
- Makes codebase easier to maintain

#### 2. Avoid Large Components with Nested Rendering Functions

**Bad:**
```tsx
function Component() {
  function renderItems() {
    return <ul>...</ul>;
  }
  return <div>{renderItems()}</div>;
}
```

**Good:**
```tsx
function Items() {
  return <ul>...</ul>;
}

function Component() {
  return (
    <div>
      <Items />
    </div>
  );
}
```

#### 3. Stay Consistent

- Use linters and formatters
- Follow naming conventions (e.g., PascalCase for components)
- Maintain consistent patterns across the codebase

#### 4. Limit Component Props

If a component accepts too many props:
- Consider splitting into multiple components
- Use composition via `children` or slots
- Leverage render props or compound component patterns

#### 5. Abstract Shared Components

For larger projects:
- Build a component library for shared components
- Ensures consistency and maintainability
- Identify repetitions before creating abstractions
- Wrap 3rd party components to adapt them to your needs

### Component Libraries

**Fully Featured (styled out of the box):**
- [Chakra UI](https://chakra-ui.com/) - Fast prototyping, accessible
- [AntD](https://ant.design/) - Great for admin dashboards
- [MUI](https://mui.com/material-ui/) - Material Design or headless
- [Mantine](https://mantine.dev/) - Modern with lots of hooks

**Headless (unstyled, bring your own styles):**
- [Radix UI](https://www.radix-ui.com/)
- [Headless UI](https://headlessui.dev/)
- [react-aria](https://react-spectrum.adobe.com/react-aria/)
- [Ark UI](https://ark-ui.com/)
- [Reakit](https://reakit.io/)

**Code-Based Component Libraries:**
- [ShadCN UI](https://ui.shadcn.com/) - Copy components into your codebase
- [Park UI](https://park-ui.com/)

### Styling Solutions

Choose based on your needs:
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first
- [vanilla-extract](https://github.com/seek-oss/vanilla-extract) - Zero runtime
- [Panda CSS](https://panda-css.com/) - Type-safe CSS-in-JS
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped CSS
- [styled-components](https://styled-components.com/) - CSS-in-JS
- [emotion](https://emotion.sh/docs/introduction) - CSS-in-JS

**Note:** React Server Components require zero-runtime styling solutions.

### Storybook

Use [Storybook](https://storybook.js.org/) as a component catalog:
- Develop components in isolation
- Document component variations
- Improve component discoverability

---

## 🗃️ State Management

Categorize state by usage rather than storing everything in one place.

### Component State

State specific to individual components:
- Pass down as props when needed
- Start with component-level state
- Elevate only when needed elsewhere

**Tools:**
- `useState` - Simple, independent state
- `useReducer` - Complex state with multiple updates per action

### Application State

Global application state (modals, notifications, theme):
- Keep state as close as possible to where it's used
- Don't globalize unnecessarily

**Solutions:**
- [React Context](https://react.dev/learn/passing-data-deeply-with-context) + hooks
- [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/)
- [MobX](https://mobx.js.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Jotai](https://github.com/pmndrs/jotai)
- [XState](https://xstate.js.org/)

### Server Cache State

Data from the server cached on the client:

**Specialized Libraries (preferred over Redux):**
- [TanStack Query](https://tanstack.com/query) - REST + GraphQL
- [SWR](https://swr.vercel.app/) - REST + GraphQL
- [Apollo Client](https://www.apollographql.com/) - GraphQL
- [urql](https://formidable.com/open-source/urql/) - GraphQL
- [RTK Query](https://redux-toolkit.js.org/rtk-query) - Redux integration

### Form State

Forms can be controlled or uncontrolled in React.

**Form Libraries:**
- [React Hook Form](https://react-hook-form.com/)
- [Formik](https://formik.org/)
- [React Final Form](https://github.com/final-form/react-final-form)

**Validation Libraries:**
- [Zod](https://github.com/colinhacks/zod)
- [Yup](https://github.com/jquense/yup)

**Best Practice:** Create abstracted `Form` component and input field components that wrap the library functionality.

### URL State

Data stored in the browser's address bar:
- URL parameters: `/app/${dynamicParam}`
- Query parameters: `/app?dynamicParam=1`
- Managed through routing solutions (React Router, Wouter, etc.)

---

## 📡 API Layer

### Use a Single API Client Instance

Create one pre-configured API client for the entire app:
- Use native `fetch` or libraries like `axios`, `graphql-request`, `apollo-client`
- Configure once with defaults (base URL, headers, auth, etc.)
- Reuse throughout the application

### Define and Export Request Declarations

Structure API requests with:

1. **Types and validation schemas** for request/response data
2. **Fetcher function** that calls the endpoint using the API client
3. **Hook** that wraps the fetcher using TanStack Query, SWR, etc.

**Benefits:**
- Easy to track all endpoints
- Type-safe responses
- Centralized API logic
- Better maintainability

**Example structure:**
```typescript
// features/discussions/api/get-discussions.ts
export const getDiscussions = async () => {
  const response = await apiClient.get('/discussions');
  return discussionsSchema.parse(response.data);
};

export const useDiscussions = () => {
  return useQuery({
    queryKey: ['/api/discussions'],
    queryFn: getDiscussions,
  });
};
```

---

## 🚄 Performance

### Code Splitting

Split production JavaScript into smaller chunks:
- Implement at the route level
- Load only necessary code initially
- Fetch additional code lazily as needed
- Avoid excessive splitting (too many requests hurts performance)

**Example:**
```typescript
const Dashboard = lazy(() => import('./pages/Dashboard'));
```

### Component and State Optimizations

**State Management:**
- Don't put everything in one state
- Keep state close to where it's used
- Use state initializer functions for expensive computations:

```typescript
// Bad - runs on every render
const [state, setState] = useState(expensiveFn());

// Good - runs only once
const [state, setState] = useState(() => expensiveFn());
```

**Libraries for Fine-Grained Updates:**
- [Jotai](https://jotai.pmnd.rs/) - Atomic state updates
- [use-context-selector](https://github.com/dai-shi/use-context-selector) - Selective context updates

**Context Best Practices:**
- Use for low-velocity data (themes, user data, settings)
- Consider selectors for medium/high-velocity data
- Try [lifting state up](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example) or better composition before reaching for context

**Styling Performance:**
- Runtime solutions (emotion, styled-components) generate styles at runtime
- Build-time solutions (Tailwind, vanilla-extract, CSS Modules) are faster
- Consider zero-runtime solutions for frequently updating UIs

### Children as Basic Optimization

The `children` prop prevents unnecessary re-renders:

**Not Optimized:**
```tsx
const App = () => <Counter />;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <PureComponent /> {/* Re-renders when count updates */}
    </div>
  );
};
```

**Optimized:**
```tsx
const App = () => (
  <Counter>
    <PureComponent />
  </Counter>
);

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      {children} {/* Won't re-render when count updates */}
    </div>
  );
};
```

### Image Optimizations

- Lazy load images not in viewport
- Use modern formats (WEBP)
- Use `srcset` for responsive images

### Web Vitals

Monitor performance metrics:
- Use [Lighthouse](https://web.dev/measure/)
- Check [PageSpeed Insights](https://pagespeed.web.dev/)
- Google considers web vitals for SEO ranking

### Data Prefetching

Prefetch data before navigation:
```typescript
queryClient.prefetchQuery({
  queryKey: ['/api/discussions'],
  queryFn: getDiscussions,
});
```

---

## 🔐 Security

### Authentication

**JWT Token Storage:**
- **Application state** - Most secure but resets on refresh
- **localStorage** - Vulnerable to XSS attacks
- **HttpOnly cookies** - Recommended (inaccessible to JavaScript)

**XSS Prevention:**
- Sanitize all user inputs before displaying
- Use libraries like DOMPurify for HTML sanitization
- See [OWASP Top 10](https://owasp.org/www-project-top-10-client-side-security-risks/) for security risks

**User State Management:**
- Treat user data as global state
- Use TanStack Query or context + hooks
- Consider [react-query-auth](https://github.com/alan2207/react-query-auth) for auth state

### Authorization

#### RBAC (Role-Based Access Control)

Define roles with specific permissions:

```tsx
const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
};

// Component protection
<RBAC allowedRoles={[ROLES.ADMIN]}>
  <AdminPanel />
</RBAC>
```

#### PBAC (Permission-Based Access Control)

More granular control based on specific conditions:

```tsx
// Only comment owner can delete
<RBAC 
  allowedRoles={[ROLES.USER]} 
  policy={(user) => comment.authorId === user.id}
>
  <DeleteButton />
</RBAC>
```

---

## ⚠️ Error Handling

### API Errors

Use interceptors to handle API errors globally:
- Show notification toasts
- Log out unauthorized users
- Refresh tokens
- Log errors for debugging

**Example:**
```typescript
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    // Show error notification
    return Promise.reject(error);
  }
);
```

### In-App Errors

Use Error Boundaries strategically:
- Place multiple boundaries in different areas
- Contain errors locally
- Prevent full app crashes
- Provide fallback UI

```tsx
<ErrorBoundary fallback={<ErrorPage />}>
  <YourComponent />
</ErrorBoundary>
```

### Error Tracking

Use error tracking tools in production:
- [Sentry](https://sentry.io/) - Recommended
- Upload source maps for better debugging
- Track platform/browser information
- Monitor error frequency and patterns

---

## 🧪 Testing

### Testing Philosophy

Focus on integration and e2e tests over unit tests:
- Unit tests validate individual parts
- Integration tests verify parts work together
- E2e tests confirm the whole system functions
- **Most confidence comes from integration/e2e tests**

### Test Types

#### Unit Tests
- Test individual components/functions in isolation
- Useful for shared utilities and complex logic
- Fast to run, easy to write

#### Integration Tests
- Test how different parts work together
- **Primary focus for testing strategy**
- Provide the most confidence
- Test features as users experience them

#### End-to-End Tests
- Test the complete application
- Simulate real user interactions
- Automate entire workflows
- Catch issues that other tests miss

### Recommended Tools

**[Vitest](https://vitest.dev/)**
- Modern testing framework
- Similar to Jest but more up-to-date
- Works well with modern tools
- Highly customizable

**[Testing Library](https://testing-library.com/)**
- Test how users interact with your app
- Avoid testing implementation details
- Test rendered output, not internal state
- Survives refactoring

**[Playwright](https://playwright.dev/)**
- E2e test automation
- Browser mode for development (visual)
- Headless mode for CI/CD
- Cross-browser testing

**[MSW (Mock Service Worker)](https://mswjs.io/)**
- Mock API responses
- Intercepts HTTP requests
- No backend needed for frontend development
- Useful for testing and prototyping

**Example MSW handler:**
```typescript
export const handlers = [
  rest.get('/api/discussions', (req, res, ctx) => {
    return res(ctx.json({ discussions: mockDiscussions }));
  }),
];
```

---

## 📝 Summary

**Key Principles:**

1. **Structure** - Organize by features, not technical layers
2. **Standards** - Use ESLint, Prettier, TypeScript, Husky
3. **Components** - Colocate code, avoid large components, stay consistent
4. **State** - Categorize by usage, keep close to consumers
5. **API** - Single client instance, structured request declarations
6. **Performance** - Code splitting, optimize state, use children prop
7. **Security** - HttpOnly cookies, sanitize inputs, RBAC/PBAC
8. **Errors** - Global interceptors, error boundaries, tracking tools
9. **Testing** - Focus on integration tests, use modern tools

**Remember:** These are guidelines, not rigid rules. Adapt them to your project's specific needs while maintaining the core principles of scalability, maintainability, and developer experience.
