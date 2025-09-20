# GitHub Copilot Instructions

## Project Overview
This is a Vite + TailwindCSS project with hot reload development server. The primary focus is on mobile-friendly, responsive design using correct TailwindCSS conventions.

## Mobile-First Design Principles

### 1. Mobile-First Responsive Design
- **ALWAYS** start with mobile styles (no prefix) and add larger breakpoints as needed
- Use TailwindCSS breakpoint system: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Default styles should work perfectly on mobile (320px+)

```css
/* ✅ CORRECT - Mobile first */
<div class="text-sm sm:text-base md:text-lg lg:text-xl">

/* ❌ WRONG - Desktop first */
<div class="text-xl lg:text-lg md:text-base sm:text-sm">
```

### 2. TailwindCSS Breakpoints (Mobile First)
- `sm:` 640px and up (small tablets, large phones in landscape)
- `md:` 768px and up (tablets)
- `lg:` 1024px and up (small laptops)
- `xl:` 1280px and up (large laptops, desktops)
- `2xl:` 1536px and up (large desktops)

## Essential Mobile-Friendly Patterns

### Container and Layout
```html
<!-- ✅ CORRECT - Mobile-friendly container -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>

<!-- ✅ CORRECT - Responsive grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Grid items -->
</div>

<!-- ✅ CORRECT - Flexible layout -->
<div class="flex flex-col sm:flex-row gap-4">
  <!-- Flex items -->
</div>
```

### Typography
```html
<!-- ✅ CORRECT - Responsive text sizing -->
<h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
<p class="text-sm sm:text-base leading-relaxed">

<!-- ✅ CORRECT - Line height for readability -->
<p class="text-base leading-6 sm:leading-7">
```

### Spacing and Sizing
```html
<!-- ✅ CORRECT - Responsive padding/margin -->
<div class="p-4 sm:p-6 lg:p-8">
<div class="mb-4 sm:mb-6 lg:mb-8">

<!-- ✅ CORRECT - Touch-friendly button sizing -->
<button class="py-3 px-6 min-h-[44px] text-base">
```

### Images and Media
```html
<!-- ✅ CORRECT - Responsive images -->
<img class="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg" 
     src="image.jpg" 
     alt="Description">

<!-- ✅ CORRECT - Aspect ratio containers -->
<div class="aspect-video w-full">
  <iframe class="w-full h-full"></iframe>
</div>
```

## Common Mobile UI Patterns

### Navigation
```html
<!-- Mobile-first navigation -->
<nav class="fixed bottom-0 left-0 right-0 bg-white border-t sm:relative sm:border-t-0">
  <div class="flex justify-around py-2 sm:justify-start sm:space-x-8 sm:py-4">
    <!-- Nav items -->
  </div>
</nav>

<!-- Hamburger menu for mobile -->
<div class="block sm:hidden">
  <button class="p-2 rounded-md">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <!-- Hamburger icon -->
    </svg>
  </button>
</div>
```

### Cards and Content
```html
<!-- Responsive cards -->
<div class="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
  <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
  <p class="text-gray-600 text-sm sm:text-base">
</div>
```

### Forms
```html
<!-- Mobile-friendly forms -->
<form class="space-y-4 sm:space-y-6">
  <div>
    <label class="block text-sm font-medium mb-1 sm:mb-2">
    <input class="w-full px-3 py-3 border rounded-lg text-base" 
           type="text">
  </div>
  <button class="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg">
    Submit
  </button>
</form>
```

## Performance and Accessibility

### Touch Targets
- Minimum touch target size: 44px × 44px
- Use `min-h-[44px]` and appropriate padding
- Ensure adequate spacing between clickable elements

### Accessibility
```html
<!-- ✅ CORRECT - Accessible elements -->
<button class="sr-only sm:not-sr-only">Desktop Label</button>
<div class="focus:ring-2 focus:ring-blue-500 focus:outline-none">
```

### Performance
- Use `loading="lazy"` for images below the fold
- Prefer `bg-` utilities over custom CSS
- Use TailwindCSS purging (already configured in this project)

## Common Mistakes to Avoid

### ❌ WRONG - Desktop-first thinking
```html
<div class="w-1/3 sm:w-full">  <!-- Desktop first -->
<div class="hidden sm:block">  <!-- Hiding content on mobile -->
<div class="text-xl sm:text-sm"> <!-- Large to small -->
```

### ✅ CORRECT - Mobile-first approach
```html
<div class="w-full sm:w-1/3">     <!-- Mobile first -->
<div class="block sm:hidden">     <!-- Progressive enhancement -->
<div class="text-sm sm:text-xl">  <!-- Small to large -->
```

### ❌ WRONG - Fixed dimensions
```html
<div class="w-96 h-64">  <!-- Fixed width/height -->
<div class="p-8">        <!-- Fixed padding on mobile -->
```

### ✅ CORRECT - Responsive dimensions
```html
<div class="w-full max-w-sm sm:max-w-md lg:max-w-lg"> <!-- Responsive width -->
<div class="p-4 sm:p-6 lg:p-8">                      <!-- Responsive padding -->
```

## Project-Specific Guidelines

### Color Scheme
- Use consistent color palette from TailwindCSS defaults
- Ensure sufficient contrast ratios (4.5:1 minimum)
- Test colors on both light and dark backgrounds

### Component Structure
- Keep components simple and reusable
- Use utility classes over custom CSS
- Follow the existing project structure in `src/`

### Development Workflow
- Test on multiple screen sizes using browser dev tools
- Use the hot reload server (`npm run dev`) for rapid iteration
- Verify TailwindCSS classes are being purged in production builds

## Testing Checklist

Before committing code, ensure:
- [ ] Design works on mobile (320px minimum width)
- [ ] Touch targets are at least 44px × 44px
- [ ] Text is readable without zooming
- [ ] Navigation is accessible on small screens
- [ ] Images and media are responsive
- [ ] Forms are easy to use on mobile
- [ ] No horizontal scrolling on mobile
- [ ] Loading states are mobile-friendly

## Resources

- [TailwindCSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [TailwindCSS Mobile-First](https://tailwindcss.com/docs/responsive-design#mobile-first)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Touch Target Guidelines](https://web.dev/accessible-tap-targets/)

Remember: **Mobile users are primary users**. Always design and develop with mobile-first mentality.
