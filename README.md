# AgentClan Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS. This project showcases AgentClan's services and offerings with a sleek, professional design.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   │   ├── button.tsx
│   │   ├── navigation-menu.tsx
│   │   └── ThemeToggle.tsx
│   └── Navbar.tsx     # Main navigation component
├── contexts/          # React contexts
│   └── ThemeContext.tsx
├── hooks/             # Custom React hooks
│   └── use-mobile.ts
├── lib/              # Utility functions and helpers
│   └── utils.ts
└── App.tsx           # Root application component

```

## 🎨 Key Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Dark Mode**: Built-in theme switching between light and dark modes
- **Smooth Scrolling**: Integrated smooth scroll functionality for hash links
- **Modern UI Components**: Built with shadcn/ui components for a consistent look
- **Navigation System**:
  - Responsive navbar with mobile menu
  - Dropdown menus for services
  - Smart link handling (hash links vs route links)

## 🛠️ Technical Stack

- **React**: Frontend library
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Modern icon set
- **react-scroll**: Smooth scrolling functionality
- **react-router-dom**: Navigation and routing

## 🧩 Component Structure

### Navigation System

The navigation system is built with three main components:

1. **NavLink**: Smart link component that handles:

   - Regular route navigation
   - Smooth scrolling for hash links
   - Custom styling and hover effects

2. **NavMenuItem**: Used in dropdown menus for services section with:

   - Icon support
   - Description
   - Hover effects

3. **MobileNavLink**: Mobile-optimized navigation links with:
   - Responsive design
   - Touch-friendly targets
   - Smooth scrolling support

## 🎯 Best Practices

- Use TypeScript for type safety
- Follow component-based architecture
- Maintain consistent naming conventions
- Keep components modular and reusable
- Use Tailwind CSS for styling
- Implement responsive design patterns

## 🔄 State Management

- **Theme Context**: Manages application-wide theme state
- **Mobile Detection**: Custom hook for responsive behavior
- **Navigation State**: Handles mobile menu and scroll states

## 📱 Responsive Design

The application is built with a mobile-first approach:

- Breakpoints: sm, md, lg, xl
- Mobile menu for smaller screens
- Responsive typography and spacing
- Adaptive navigation patterns

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📝 Adding New Content

### Services Section

To add a new service to the navigation menu:

1. In `Navbar.tsx`, locate the `NavigationMenuContent` section
2. Add a new `NavMenuItem` component with the following structure:

```tsx
<NavMenuItem
  href="/services/your-service"
  title="Your Service"
  description="Brief description of your service."
  icon={<YourIcon className="h-4 w-4 text-brand-500" />}
/>
```

### Adding New Pages

1. Create a new page component in `src/pages/`:

```tsx
// src/pages/YourPage.tsx
import React from "react";

const YourPage = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">Your Page Title</h1>
      {/* Your content here */}
    </div>
  );
};

export default YourPage;
```

2. Add the route in your router configuration:

```tsx
<Route path="/your-path" element={<YourPage />} />
```

### Adding Navigation Links

For regular page links:

```tsx
<NavLink href="/your-path" icon={<YourIcon className="h-4 w-4" />}>
  Your Link Text
</NavLink>
```

For scroll links (same-page sections):

```tsx
<NavLink href="#your-section" icon={<YourIcon className="h-4 w-4" />}>
  Your Section
</NavLink>
```

### Creating New Sections

When adding a new section to the landing page:

1. Create a new component in `src/components/`:

```tsx
// src/components/YourSection.tsx
import React from "react";
import RevealAnimation from "./ui/RevealAnimation";

const YourSection = () => {
  return (
    <section id="your-section" className="py-20">
      <RevealAnimation>
        <div className="container mx-auto">{/* Your section content */}</div>
      </RevealAnimation>
    </section>
  );
};

export default YourSection;
```

2. Use the component in your page:

```tsx
import YourSection from "@/components/YourSection";

// Inside your page component:
<YourSection />;
```

### Styling Guidelines

When adding new content, follow these styling patterns:

- Use Tailwind's container: `container mx-auto`
- Section padding: `py-20` (adjustable for different sections)
- Responsive classes: `px-4 sm:px-6 lg:px-12`
- Animation wrapper: `<RevealAnimation>` for consistent animations
- Color scheme: Use `brand-{shade}` for primary colors
- Dark mode: Include `dark:` variants for dark mode support

### Common Components

Utilize these pre-built components for consistency:

```tsx
// Button variants
<Button variant="outline" size="sm" className="rounded-full">
  Your Text
</Button>

// Reveal animations
<RevealAnimation delay={0.1}>
  Your Content
</RevealAnimation>

// Navigation menu items
<NavigationMenuItem>
  Your Navigation Content
</NavigationMenuItem>
```

### Theme Integration

When adding new UI elements, ensure dark mode support:

```tsx
className={cn(
  "your-base-classes",
  theme === "dark"
    ? "dark-mode-specific-classes"
    : "light-mode-specific-classes"
)}
```

## 📊 Data Management

### Component Data Structure

Each major section typically has its own data file in `src/data/` directory. Here's how to structure and add data for different components:

### Services Data

```tsx
// src/data/services.ts
import {
  Briefcase,
  Users,
  Calendar,
  Building,
  RocketIcon,
  Film,
} from "lucide-react";

export const servicesData = [
  {
    id: "marketing",
    title: "Marketing",
    description: "Creative campaigns that influence and inspire.",
    icon: Briefcase,
    href: "/services/marketing",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // Add more services following the same structure
];

// Usage in component:
import { servicesData } from "@/data/services";

{
  servicesData.map((service) => (
    <NavMenuItem
      key={service.id}
      href={service.href}
      title={service.title}
      description={service.description}
      icon={<service.icon className="h-4 w-4 text-brand-500" />}
    />
  ));
}
```

### Testimonials Data

```tsx
// src/data/testimonials.ts
export const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/testimonials/john.jpg",
    content: "Your testimonial text here",
    rating: 5,
    company: {
      name: "TechCorp",
      logo: "/companies/techcorp.svg",
    },
  },
  // Add more testimonials...
];

// Usage in component:
import { testimonialData } from "@/data/testimonials";

{
  testimonialData.map((testimonial) => (
    <TestimonialCard key={testimonial.id} {...testimonial} />
  ));
}
```

### FAQ Data

```tsx
// src/data/faq.ts
export const faqData = [
  {
    question: "Common question here?",
    answer: "Detailed answer to the question.",
    category: "general",
  },
  // Add more FAQ items...
];

// Usage in component:
import { faqData } from "@/data/faq";

{
  faqData.map((item, index) => (
    <AccordionItem key={index} question={item.question} answer={item.answer} />
  ));
}
```

### Navigation Data

```tsx
// src/data/navigation.ts
import { Compass, HelpCircle, PhoneCallIcon } from "lucide-react";

export const navigationLinks = [
  {
    title: "Services",
    href: "#services",
    icon: Compass,
    isHash: true,
    dropdownContent: servicesData, // Reference to services data
  },
  // Add more navigation items...
];

export const mobileNavLinks = [
  {
    title: "Services",
    href: "#services",
    icon: Compass,
    isHash: true,
  },
  // Add more mobile navigation items...
];

// Usage in Navbar:
import { navigationLinks, mobileNavLinks } from "@/data/navigation";

{
  navigationLinks.map((link) => (
    <NavLink
      key={link.title}
      href={link.href}
      icon={<link.icon className="h-4 w-4" />}
    >
      {link.title}
    </NavLink>
  ));
}
```

### Features Data

```tsx
// src/data/features.ts
export const featuresData = [
  {
    title: "Feature Title",
    description: "Feature description here",
    icon: YourIcon,
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    image: "/features/feature1.png",
  },
  // Add more features...
];

// Usage in component:
import { featuresData } from "@/data/features";

{
  featuresData.map((feature, index) => (
    <FeatureCard key={index} {...feature} reversed={index % 2 !== 0} />
  ));
}
```

### Adding New Data

1. Create a new data file in `src/data/` if it doesn't exist
2. Export a typed constant following the existing patterns
3. Import and use in your component

Example of adding new data:

```tsx
// src/data/your-data.ts
import { IconType } from "lucide-react";

interface YourDataType {
  id: string | number;
  title: string;
  description: string;
  icon: IconType;
  // Add more type definitions as needed
}

export const yourData: YourDataType[] = [
  {
    id: 1,
    title: "Your Title",
    description: "Your Description",
    icon: YourIcon,
  },
  // Add more items...
];

// Usage in your component:
import { yourData } from "@/data/your-data";

const YourComponent = () => {
  return (
    <div>
      {yourData.map((item) => (
        <YourComponentCard key={item.id} {...item} />
      ))}
    </div>
  );
};
```

### Best Practices for Data Management

1. **Type Safety**:

   - Always define TypeScript interfaces for your data structures
   - Use strict typing to catch errors early

2. **Organization**:

   - Keep related data in separate files
   - Use clear, descriptive names for data files and exports
   - Group similar data types together

3. **Maintenance**:

   - Keep data files modular and focused
   - Comment complex data structures
   - Use constants for repeated values

4. **Performance**:

   - Lazy load large data sets
   - Use proper key props when mapping
   - Consider data caching for large lists

5. **Scalability**:
   - Structure data to be easily extendable
   - Use nested objects for complex relationships
   - Keep data normalized when appropriate
