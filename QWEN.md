# Qwen Code Context: Vue 3 Project

## Project Overview

This is a Vue 3 project built with Vite, TypeScript, and Vue Router. The project follows modern Vue development practices with TypeScript support, component-based architecture, and ES6 modules. The project name appears to be "wyx" and includes Font Awesome icons and Google Fonts integration.

### Key Technologies
- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Vite** as the build tool and development server
- **Vue Router** for client-side routing
- **ESLint + Oxlint** for code linting
- **Font Awesome** for icons
- **Google Fonts** (Noto Sans SC)

### Project Structure
```
├── .vscode/                 # VS Code settings
├── public/                  # Static assets
├── src/                     # Source code
│   ├── assets/              # Static assets (CSS, images, etc.)
│   ├── components/          # Vue components
│   ├── router/              # Router configuration
│   ├── views/               # Page components
│   ├── App.vue              # Root component
│   └── main.ts              # Application entry point
├── wyx/                     # Additional project directory
├── .editorconfig            # Editor configuration
├── .gitignore               # Git ignore rules
├── eslint.config.ts         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── tsconfig.app.json        # TypeScript app configuration
├── tsconfig.json            # TypeScript root configuration
├── tsconfig.node.json       # TypeScript node configuration
├── vite.config.ts           # Vite configuration
└── QWEN.md                  # Current file
```

## Building and Running

### Prerequisites
- Node.js version: `^20.19.0 || >=22.12.0`
- npm (or yarn/pnpm)

### Setup Commands
```sh
# Install dependencies
npm install

# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type-check the project
npm run type-check

# Lint and fix code issues
npm run lint
```

### Linting
The project uses multiple linters:
- ESLint with Vue and TypeScript support
- Oxlint for additional correctness checks
- The `lint` script runs all linters sequentially

## Development Conventions

### Coding Style
- TypeScript with strict type checking
- Vue 3 Composition API with `<script setup>`
- Component-based architecture
- Vue Router for navigation
- Modern CSS with scoped styles
- Google Fonts and Font Awesome for UI elements

### File Organization
- Components are organized by feature/functionality
- Views are placed in the `src/views/` directory
- Router configuration is in `src/router/index.ts`
- Assets are stored in `src/assets/`
- Components are in `src/components/`

### Component Structure
- `.vue` files contain template, script, and style sections
- Single-file components with optional scoped CSS
- TypeScript type definitions for props and events
- Use of Vue's Composition API with `<script setup>`

### Project-Specific Features
- Google Fonts integration (Noto Sans SC font family)
- Font Awesome icon integration via CDN
- Preconnect links in index.html for performance
- Dynamic imports for route components (code splitting)
- Vue DevTools integration in development

## Routing
The application has the following routes:
- `/` - Redirects to `/wyx`
- `/wyx` - Main view component
- `/wyx/peach-blossom-spring` - Special view component

## Important Configuration Files

### Vite Configuration (`vite.config.ts`)
- Uses Vue and Vue JSX plugins
- Includes Vue DevTools plugin
- Configures path alias `@` to `src/`
- Includes font file types in assets

### TypeScript Configuration
- Separate configs for app (`tsconfig.app.json`) and node (`tsconfig.node.json`)
- Path alias `@/*` maps to `./src/*`
- Uses `@vue/tsconfig` for DOM types

### ESLint Configuration
- Vue-specific linting rules
- TypeScript support
- Oxlint integration for additional checks
- Ignores build/dist directories

## IDE Setup
Recommended: VS Code with Vue (Official) extension (and disable Vetur)

Browser DevTools:
- Vue.js devtools recommended
- Custom Object Formatter should be enabled in browser devtools

## Notes
- The project appears to have Chinese font support (Noto Sans SC)
- The project includes a "Peach Blossom Spring" view, suggesting possible cultural or thematic content
- Font assets (woff, woff2, ttf, eot) are explicitly included in the build configuration