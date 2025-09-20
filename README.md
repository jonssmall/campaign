# Vite + TailwindCSS Project

A modern web development setup using Vite and TailwindCSS with hot reload enabled.

## Features

- ⚡️ **Vite** - Fast build tool and dev server
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🔥 **Hot Module Replacement (HMR)** - Instant updates during development
- 📦 **Modern ES Modules** - Native ES module support
- 🚀 **Fast Refresh** - Preserves local state during development

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The development server will start at `http://localhost:3000` and automatically open in your browser.

### Building for Production

Build the project for production:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/          # Static assets
│   └── vite.svg     # Vite logo
├── src/             # Source files
│   ├── main.js      # Application entry point
│   └── style.css    # TailwindCSS imports
├── index.html       # HTML template
├── package.json     # Project dependencies and scripts
├── tailwind.config.js  # TailwindCSS configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js   # Vite configuration
```

## Configuration

### Vite Configuration

The `vite.config.js` includes:
- Hot reload on port 3000
- Auto-open browser
- Source maps for debugging

### TailwindCSS Configuration

The `tailwind.config.js` is configured to scan:
- `index.html`
- All files in `src/` with extensions: `js`, `ts`, `jsx`, `tsx`, `vue`, `html`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Adding TailwindCSS Plugins

Install and configure plugins in `tailwind.config.js`:

```bash
npm install @tailwindcss/forms @tailwindcss/typography
```

```js
// tailwind.config.js
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
]
```

### Custom Styles

Add custom styles in `src/style.css` using TailwindCSS layers:

```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
  }
}
```
