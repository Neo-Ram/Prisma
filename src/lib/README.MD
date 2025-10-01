# Prisma Components Library

A React component library focused on accessibility for color blindness, low vision, and high contrast needs.

## 🌈 Features

- **Color Blindness Support**: Components optimized for protanopia, deuteranopia, and tritanopia
- **High Contrast Mode**: Enhanced visibility for users with low vision
- **TypeScript Support**: Full type safety and IntelliSense
- **Responsive Design**: Mobile-friendly components
- **CSS Modules**: Scoped styling to avoid conflicts

## 📦 Installation

```bash
npm install @prisma/components
# or
yarn add @prisma/components
```

## 🚀 Quick Start

### Basic Usage

```jsx
import { PButton } from '@prisma/components';

function App() {
  return (
    <PButton 
      variant="primary" 
      onClick={() => console.log('Clicked!')}
    >
      Click me
    </PButton>
  );
}
```

### With Color Blindness Support

```jsx
import { PButton } from '@prisma/components';

function App() {
  return (
    <div>
      {/* Normal vision */}
      <PButton variant="primary" colorBlindness="normal">
        Normal Button
      </PButton>
      
      {/* For users with tritanopia (blue-yellow color blindness) */}
      <PButton variant="primary" colorBlindness="tritanopia">
        Tritanopia-friendly Button
      </PButton>
      
      {/* High contrast for low vision */}
      <PButton variant="primary" highContrast>
        High Contrast Button
      </PButton>
    </div>
  );
}
```

## 🎨 PButton Component

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style of the button |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the button |
| `colorBlindness` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color blindness type to optimize for |
| `highContrast` | `boolean` | `false` | Enable high contrast mode |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `loading` | `boolean` | `false` | Show loading state |
| `disabled` | `boolean` | `false` | Disable the button |

### Examples

#### Different Variants
```jsx
<PButton variant="primary">Primary</PButton>
<PButton variant="secondary">Secondary</PButton>
<PButton variant="outline">Outline</PButton>
<PButton variant="ghost">Ghost</PButton>
```

#### Different Sizes
```jsx
<PButton size="small">Small</PButton>
<PButton size="medium">Medium</PButton>
<PButton size="large">Large</PButton>
```

#### Loading State
```jsx
<PButton loading>Loading...</PButton>
```

#### Full Width
```jsx
<PButton fullWidth>Full Width Button</PButton>
```

## 🎯 Accessibility Features

### Color Blindness Support

- **Protanopia**: Difficulty seeing red colors
- **Deuteranopia**: Difficulty seeing green colors  
- **Tritanopia**: Difficulty seeing blue colors

The library automatically adjusts colors based on the `colorBlindness` prop to ensure optimal visibility.

### High Contrast Mode

When `highContrast={true}` is enabled:
- Thicker borders (3px instead of 2px)
- Bolder font weights (700 instead of 500)
- Maximum contrast color combinations
- Enhanced focus indicators

### Keyboard Navigation

- Full keyboard support with Tab navigation
- Clear focus indicators with orange outlines
- Proper ARIA labels for screen readers

### Mobile Accessibility

- Minimum touch target size of 44px (following WCAG guidelines)
- Responsive design that works on all screen sizes
- Touch-friendly interactions

## 🛠️ Development

### Building the Library

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

## 📚 Examples

Check out more examples in our [documentation](https://prisma-components.dev) (coming soon).

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © [Your Name]

---

Made with ❤️ for accessibility