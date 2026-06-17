# AppInsight Landing Page

A premium marketing website for AppInsight — a powerful desktop application for monitoring and observability of Spring Boot applications.

## Overview

AppInsight transforms Spring Boot Actuator data into actionable operational intelligence through a beautiful, intuitive desktop application. This landing page showcases the product, educates visitors, and drives conversions.

## Tech Stack

- **React 18** — Modern UI library
- **TypeScript** — Type-safe development
- **Vite** — Lightning-fast build tool
- **SCSS Modules** — Scoped, maintainable styling
- **Framer Motion** — Smooth animations and transitions
- **Lucide React** — Beautiful icon library

## Project Structure

```
src/
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── Footer.tsx                 # Footer with links
│   ├── AppMockup.tsx              # Desktop app visualization
│   └── sections/                  # Page sections
│       ├── HeroSection.tsx        # Hero with CTA
│       ├── ProductShowcase.tsx    # Before/after comparison
│       ├── FeaturesSection.tsx    # Key features grid
│       ├── ScreenshotsSection.tsx # Interactive carousel
│       ├── HikariCPSection.tsx    # Connection pool details
│       ├── IntegrationSection.tsx # Architecture diagram
│       ├── PlatformSection.tsx    # OS support
│       ├── BenefitsSection.tsx    # Stats and value
│       ├── TestimonialsSection.tsx# Customer quotes
│       ├── PricingSection.tsx     # Pricing plan
│       ├── FAQSection.tsx         # FAQ accordion
│       └── FinalCTASection.tsx    # Final call to action
├── App.tsx                        # Main app component
├── main.tsx                       # Entry point
├── index.scss                     # Global styles & design system
├── App.module.scss                # App styles
└── components/                    # Component styles (SCSS modules)

```

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the dev server with hot module replacement:

```bash
npm run dev
```

The site will open at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Design System

The site uses a carefully crafted design system inspired by premium SaaS products (Datadog, Linear, Stripe, Vercel, Grafana, Raycast).

### Colors

- **Primary**: `#0066ff` (Blue)
- **Dark**: `#0a0e27` (Deep Navy)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#c9cce5` (Light Gray)

### Typography

- **Headings**: Bold, 20-56px
- **Body**: Regular, 14-18px
- **Font**: System UI font stack

### Spacing & Layout

- 8px base unit
- Responsive grid system (2-4 columns)
- Max width: 1280px

### Animations

- Smooth transitions: 150-350ms
- Framer Motion for scroll reveals and interactions
- Subtle hover effects on interactive elements

## Sections

### 1. Hero Section
- Headline: "See Everything. Miss Nothing."
- Desktop app mockup with real UI
- Primary and secondary CTAs
- Animated background orbs

### 2. Product Showcase
- Before/after comparison
- Without AppInsight vs With AppInsight
- Visual distinction with highlighting

### 3. Features
- 8 key features in a responsive grid
- Icon + title + description
- Hover effects with elevation

### 4. Screenshots
- Interactive carousel with 6 dashboard views
- Navigation dots and arrow buttons
- Auto-updating descriptions

### 5. HikariCP Spotlight
- Connection pool visualization
- Metrics and monitoring details
- Performance benefits

### 6. Integration
- Architecture diagram showing data flow
- Supported Spring Boot Actuator endpoints
- Integration details

### 7. Platform Support
- macOS, Windows, Linux
- Version information
- Download buttons per platform

### 8. Benefits
- Animated statistics
- Measurable value propositions
- Impact on team productivity

### 9. Testimonials
- 4 customer quotes
- 5-star ratings
- Company/role information

### 10. Pricing
- Single professional plan
- Feature list with checkmarks
- Contact for custom pricing

### 11. FAQ
- 6 common questions
- Accordion interface
- Support contact

### 12. Final CTA
- Strong headline
- Download and demo buttons
- Animated background

## Performance

- Optimized images and SVGs
- Code splitting via Vite
- Lazy loading of components
- Smooth animations with GPU acceleration

## Accessibility

- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance

## SEO

- Meta tags and Open Graph optimization
- Semantic HTML structure
- Mobile-responsive design
- Fast page load times

## Deployment

The site can be deployed to any static hosting:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect to Git for auto-deployment
- **AWS S3**: Upload `dist/` folder

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure code is clean and well-formatted
4. Test on multiple devices
5. Submit a pull request

## License

© 2024 AppInsight. All rights reserved.

---

**Built with ❤️ for developers and DevOps engineers**
