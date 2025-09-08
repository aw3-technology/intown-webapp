# InTown WebApp Style Guide

## Table of Contents
1. [Design Principles](#design-principles)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Components](#components)
5. [Layout & Spacing](#layout--spacing)
6. [Dark Mode](#dark-mode)
7. [Accessibility](#accessibility)
8. [Code Examples](#code-examples)

---

## Design Principles

### Core Values
- **Clarity**: Every element should have a clear purpose
- **Consistency**: Maintain visual and behavioral consistency across the app
- **Accessibility**: Design for all users, regardless of ability
- **Performance**: Optimize for fast load times and smooth interactions
- **Responsiveness**: Adapt seamlessly to all screen sizes

### Visual Hierarchy
1. Use size, weight, and color to establish importance
2. Maintain consistent spacing between elements
3. Group related content visually
4. Use whitespace effectively to reduce cognitive load

---

## Color System

### Primary Colors
```css
--primary: rgba(28, 103, 243, 1)           /* #1C67F3 - Primary blue */
--primary-foreground: rgba(250, 250, 250, 1) /* Text on primary */
```

### Semantic Colors
```css
--success: rgba(0, 145, 107, 1)    /* #00916B - Success green */
--warning: rgba(232, 162, 0, 1)    /* #E8A200 - Warning yellow */
--destructive: rgba(239, 68, 68, 1) /* #EF4444 - Error red */
--info: rgba(0, 63, 210, 1)        /* #003FD2 - Info blue */
```

### Neutral Colors
```css
--background: rgba(255, 255, 255, 1)  /* Light mode background */
--foreground: rgba(10, 10, 10, 1)     /* Light mode text */
--muted: rgba(245, 245, 245, 1)       /* Muted backgrounds */
--border: rgba(229, 229, 229, 1)      /* Border color */
```

### Dark Mode Colors
```css
--background: rgba(18, 19, 22, 1)     /* Dark mode background */
--foreground: rgba(250, 250, 250, 1)  /* Dark mode text */
--card: rgba(43, 46, 53, 0.3)         /* Card backgrounds */
```

### Usage Guidelines
- **Primary**: Main CTAs, active states, key interactions
- **Secondary**: Supporting actions, less emphasis
- **Success**: Positive feedback, completed actions
- **Warning**: Caution messages, important notices
- **Destructive**: Errors, delete actions, critical alerts
- **Muted**: Disabled states, placeholder text, subtle backgrounds

---

## Typography

### Font Families
```css
--font-primary: system-ui, -apple-system, sans-serif;
--font-secondary: 'Inria Serif', serif;
```

### Type Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|--------|
| Display | 48px | Bold | 1.2 | Hero sections |
| H1 | 36px | Bold | 1.3 | Page titles |
| H2 | 30px | Semibold | 1.3 | Section headers |
| H3 | 24px | Semibold | 1.4 | Subsections |
| H4 | 20px | Medium | 1.4 | Card titles |
| Body | 16px | Regular | 1.5 | Main content |
| Small | 14px | Regular | 1.5 | Secondary text |
| Caption | 12px | Regular | 1.4 | Labels, hints |

### Text Styles
```tsx
// Headings
<h1 className="text-4xl font-bold">Main Title</h1>
<h2 className="text-3xl font-semibold">Section Header</h2>
<h3 className="text-2xl font-semibold">Subsection</h3>

// Body text
<p className="text-base">Regular paragraph text</p>
<p className="text-sm text-muted-foreground">Secondary text</p>
<p className="text-xs">Caption or label text</p>
```

---

## Components

### Buttons

#### Variants
```tsx
<Button>Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link Style</Button>
```

#### Sizes
```tsx
<Button size="lg">Large Button</Button>
<Button size="default">Default Button</Button>
<Button size="sm">Small Button</Button>
```

#### States
- **Default**: Base interactive state
- **Hover**: Subtle color change, cursor pointer
- **Active**: Pressed state, slightly darker
- **Disabled**: Reduced opacity, no pointer events
- **Loading**: Show spinner, disable interaction

### Cards

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Supporting description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Card Variants
- **Default**: Standard card with subtle shadow
- **Solid**: Uses `card-solid` background color
- **Interactive**: Add hover state for clickable cards
- **Elevated**: Increased shadow for emphasis

### Forms

#### Input Fields
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="name@example.com"
  />
</div>
```

#### Select Dropdowns
```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

#### Checkboxes & Switches
```tsx
// Checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>

// Switch
<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

### Alerts

```tsx
// Default alert
<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This is an informational message.</AlertDescription>
</Alert>

// Error alert
<Alert className="border-destructive bg-destructive/10">
  <XCircle className="h-4 w-4 text-destructive" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>

// Success alert
<Alert className="border-success bg-success/10">
  <CheckCircle className="h-4 w-4 text-success" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Action completed successfully!</AlertDescription>
</Alert>
```

### Badges

```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

---

## Layout & Spacing

### Spacing Scale
```css
--spacing-xs: 4px   /* 0.25rem */
--spacing-sm: 8px   /* 0.5rem */
--spacing-md: 16px  /* 1rem */
--spacing-lg: 24px  /* 1.5rem */
--spacing-xl: 32px  /* 2rem */
--spacing-2xl: 48px /* 3rem */
--spacing-3xl: 64px /* 4rem */
```

### Container Widths
```css
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1280px
--container-2xl: 1536px
```

### Grid System
```tsx
// Basic grid
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-3">Sidebar</div>
  <div className="col-span-9">Main Content</div>
</div>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>
```

### Padding & Margin
- Use consistent spacing units (p-2, p-4, p-6, p-8)
- Maintain visual rhythm with consistent margins
- Group related elements with smaller spacing
- Separate sections with larger spacing

---

## Dark Mode

### Implementation
The app supports three theme modes:
- **Light**: Default light theme
- **Dark**: Dark theme for low-light environments
- **System**: Follows OS preference

### Theme Toggle
```tsx
const { theme, setTheme } = useTheme();

<Select value={theme} onValueChange={setTheme}>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
```

### CSS Variables
All colors are defined as CSS variables that automatically switch based on the active theme:

```css
/* Light mode (default) */
:root {
  --background: rgba(255, 255, 255, 1);
  --foreground: rgba(10, 10, 10, 1);
}

/* Dark mode */
.dark {
  --background: rgba(18, 19, 22, 1);
  --foreground: rgba(250, 250, 250, 1);
}
```

### Best Practices
- Test all components in both light and dark modes
- Ensure sufficient contrast ratios (WCAG AA minimum)
- Use semantic color variables, not hard-coded values
- Consider reduced transparency in dark mode for better readability

---

## Accessibility

### Color Contrast
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- Test with color blindness simulators

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators on all focusable elements
- Logical tab order following visual flow
- Skip links for main content areas

### ARIA Labels
```tsx
// Button with icon only
<Button aria-label="Delete item">
  <TrashIcon />
</Button>

// Form field with description
<div>
  <Label htmlFor="password">Password</Label>
  <Input 
    id="password" 
    type="password"
    aria-describedby="password-help"
  />
  <p id="password-help" className="text-sm text-muted-foreground">
    Must be at least 8 characters
  </p>
</div>
```

### Screen Reader Support
- Use semantic HTML elements
- Provide alternative text for images
- Use ARIA attributes appropriately
- Test with screen readers (NVDA, JAWS, VoiceOver)

---

## Code Examples

### Creating a New Component
```tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children: React.ReactNode;
}

export const Component: React.FC<ComponentProps> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn(
      "base-styles-here",
      className
    )}>
      {children}
    </div>
  );
};
```

### Using Theme Colors
```tsx
// Use CSS variables for theme-aware colors
<div className="bg-background text-foreground">
  <h1 className="text-primary">Theme-aware heading</h1>
  <p className="text-muted-foreground">Secondary text</p>
</div>
```

### Responsive Design
```tsx
// Mobile-first responsive classes
<div className="p-4 md:p-6 lg:p-8">
  <h1 className="text-2xl md:text-3xl lg:text-4xl">
    Responsive heading
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Grid items */}
  </div>
</div>
```

### Animation Classes
```tsx
// Smooth transitions
<Button className="transition-colors duration-200 hover:bg-primary/90">
  Hover me
</Button>

// Loading states
<div className="animate-pulse bg-muted rounded h-4 w-32" />

// Fade in animation
<div className="animate-in fade-in duration-500">
  Content appears smoothly
</div>
```

---

## Component Library

### Available Components
- **Layout**: Container, Grid, Flex, Spacer
- **Typography**: Heading, Text, Link
- **Buttons**: Button, IconButton, ButtonGroup
- **Forms**: Input, Select, Checkbox, Radio, Switch, Form
- **Feedback**: Alert, Toast, Progress, Spinner
- **Overlay**: Modal, Drawer, Tooltip, Popover
- **Navigation**: Tabs, Breadcrumb, Pagination
- **Data Display**: Table, Card, Badge, Avatar
- **Utility**: Divider, Skeleton, Accordion

### Import Examples
```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
```

---

## Resources

### Live Styleguide
View the interactive styleguide at: `/styleguide`

### Design Tokens
All design tokens are defined in `/src/index.css`

### Component Documentation
Individual component documentation in `/src/components/ui/`

### Icons
Using Lucide React for consistent iconography:
```tsx
import { Home, User, Settings, ChevronRight } from 'lucide-react';
```

---

## Contributing

When adding new components or styles:
1. Follow existing naming conventions
2. Use design tokens instead of hard-coded values
3. Ensure dark mode compatibility
4. Add to the styleguide page
5. Document usage examples
6. Test accessibility requirements
7. Verify responsive behavior

---

Last Updated: September 2025