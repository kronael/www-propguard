# propGuard Landing Page

A modern, responsive landing page built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 🎭 **Framer Motion** for animations
- 📱 **Fully Responsive** design
- 🎯 **TypeScript** for type safety
- 🎪 **Interactive Components** (FAQ accordion, smooth scrolling navigation)
- 🚀 **Optimized Performance**

## Project Structure

```
propguard/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Tailwind utilities
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Main page component
│   └── components/
│       ├── Navigation.tsx   # Fixed navigation with scroll effects
│       ├── Hero.tsx         # Hero section with animated elements
│       ├── Problems.tsx     # Problems grid section
│       ├── Capabilities.tsx # Capabilities showcase
│       ├── HowItWorks.tsx   # Process steps visualization
│       ├── Dashboard.tsx    # Dashboard preview section
│       ├── Outcomes.tsx     # Statistics and outcomes
│       ├── Pricing.tsx      # Pricing plans
│       ├── FAQ.tsx          # Interactive FAQ accordion
│       └── Footer.tsx       # Site footer
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS configuration
└── next.config.js           # Next.js configuration
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Key Components

### Navigation
- Fixed header with scroll-based styling
- Smooth scroll navigation links
- Responsive design with mobile considerations

### Hero Section
- Animated badge with shimmer effect
- Gradient text effects
- Call-to-action buttons with hover animations

### Interactive Elements
- FAQ accordion with smooth animations
- Hover effects on cards and buttons
- Scroll-triggered animations using Framer Motion

### Styling Approach
- Custom Tailwind configuration with brand colors
- CSS-in-JS approach using Tailwind classes
- Responsive design patterns
- Dark theme optimized for fintech/trading industry

## Customization

### Colors
Update brand colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  accent: { ... },
  // Add your brand colors
}
```

### Content
All content is defined within each component, making it easy to update text, links, and data.

### Animations
Framer Motion animations can be customized in individual components. Key animation patterns include:
- Scroll-triggered animations (`whileInView`)
- Hover effects
- Page load animations

## Performance Features

- Next.js automatic code splitting
- Optimized images and assets
- Efficient re-renders with React best practices
- Minimal bundle size with tree shaking

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers
