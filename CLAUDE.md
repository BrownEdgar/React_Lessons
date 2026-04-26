# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **educational React 19.1 learning repository** showcasing advanced React patterns and best practices. It contains working examples of:

- **Component Patterns**: Compound Components, Portal Pattern, Render Props, Slots Pattern, Component Injection
- **State Management**: Controlled/Uncontrolled components, State Reducer Pattern, Orchestrator Pattern
- **Advanced Patterns**: Observer Pattern (Event Bus), Optimistic UI updates
- **Hooks Examples**: `useFormStatus`, `useOptimistic` and custom patterns

This is not a production application—it's a collection of educational examples and code patterns for learning purposes.

## Development Commands

```bash
# Start dev server (runs on localhost:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code with ESLint
npm run lint

# Format code with Prettier
npm run pretty

# Check code formatting without writing
npm run check-pretty
```

## Project Structure

```
src/
├── Components/
│   ├── PRO_React/
│   │   ├── App.jsx              # Main routing/navigation
│   │   ├── components/          # Advanced pattern examples
│   │   │   ├── CompoundComponents/     # Compound pattern
│   │   │   ├── ControlledUncontrolled/ # Form patterns
│   │   │   ├── ObserverPattern/        # Event bus pattern
│   │   │   ├── OptimisticUI/           # Optimistic updates
│   │   │   ├── OrchestratorPattern/    # State orchestration
│   │   │   ├── PortalPattern/          # React Portals
│   │   │   ├── RenderPropsPatern/      # Render props pattern
│   │   │   ├── SlotsPattern/           # Slots pattern
│   │   │   ├── StateReducerPattern/    # useReducer pattern
│   │   │   └── ComponentInjection/     # Component composition
│   │   └── ui/                  # Reusable UI components
│   ├── React_HOOKS/             # Hooks examples
│   │   ├── useFormStatus/
│   │   ├── useOptimistic/
│   │   └── others
│   └── ...
├── index.css                    # Global styles (custom CSS, no Tailwind)
├── main.jsx                     # Entry point
└── config/                      # App configuration

```

## Architecture Notes

### Pattern Organization
Each pattern folder contains:
- `App.jsx` - Component example demonstrating the pattern
- Component file(s) - The actual pattern implementation
- `*.css` - Component-specific styles

### Styling Approach
- **No Tailwind CSS**: This project uses traditional CSS/SCSS for styling
- Global styles in `src/index.css` with dark theme (#0f0f1a background, #e0e0e0 text)
- Custom font: PressStart2P-Regular loaded from `/src/fonts/`
- Component-specific styles use CSS files (not CSS Modules)
- Uses SASS (`sass` package) for more complex stylesheets

### Build Configuration
- **Vite 6.3.5** with React plugin
- Path aliases configured:
  - `@` → `/src/Components` (main components directory)
  - `@f` → `/src/features` (features directory)
- No Tailwind, PostCSS, or CSS-in-JS framework

## Key Technologies

- React 19.1 (latest)
- Vite 6.3.5 (build tool)
- SASS 1.89.0 (CSS preprocessing)
- React Router DOM 7.6 (routing)
- React Hook Form 7.56 (form handling)
- Formik 2.4.6 (alternative form library)
- Axios 1.9 (HTTP client)
- Testing Library (testing utilities)

## Common Development Tasks

- **Adding a new pattern example**: Create folder in `src/Components/PRO_React/components/`, include App.jsx and CSS
- **Modifying global styles**: Edit `src/index.css`
- **Testing components**: Use `npm run dev` to test in browser, or add tests in `__tests__` folders
- **Building**: `npm run build` creates optimized production build in `dist/`

## Notes for Contributors

1. This is educational content—prioritize clarity and learning outcomes over production optimization
2. Each pattern should be independently understandable; avoid tight coupling between patterns
3. Keep examples concise and focused on demonstrating the specific pattern
4. Use the established dark theme styling for consistency
5. CSS is intentional (not Tailwind)—maintain this approach for examples

