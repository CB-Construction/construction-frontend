# Professional Project Portfolio Component

## Overview

The Project component is a sophisticated, enterprise-grade project showcase component built with React and TypeScript. It provides a comprehensive solution for displaying project portfolios with advanced features including pagination, filtering, responsive design, and accessibility compliance.

## Features

### ✨ Core Features
- **Advanced Pagination**: Customizable pagination with items-per-page selection
- **Responsive Design**: Fully responsive layout that adapts to all screen sizes
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Uses React hooks (useMemo, useCallback) for optimal performance
- **Professional UI**: Modern glassmorphism design with smooth animations

### 🎨 Visual Features
- **Interactive Cards**: Hover animations and focus states
- **Progress Tracking**: Visual progress bars for project completion
- **Status Badges**: Color-coded status indicators
- **Technology Stack Display**: Dynamic tech stack tags
- **Rating System**: Star-based rating display
- **Investment Information**: Financial investment tracking

### 🔧 Technical Features
- **TypeScript Support**: Full type safety and IntelliSense support
- **Error Boundaries**: Comprehensive error handling with retry mechanisms
- **Loading States**: Professional loading animations and skeleton screens
- **State Management**: Efficient local state management with React hooks
- **Customizable**: Extensive prop-based customization options

## Props API

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `activeProject` | `number` | Index of currently active/highlighted project |
| `setActiveProject` | `(index: number) => void` | Function to set active project index |
| `isDarkMode` | `boolean` | Whether dark mode is enabled |
| `getGlassCardClass` | `() => string` | Function returning glassmorphism CSS classes |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `itemsPerPageOptions` | `number[]` | `[3, 6, 9, 12]` | Array of options for items per page selector |
| `defaultItemsPerPage` | `number` | `6` | Default number of items per page |
| `showPaginationInfo` | `boolean` | `true` | Whether to show page info |
| `enableItemsPerPageSelector` | `boolean` | `true` | Whether to show items per page dropdown |
| `maxPaginationButtons` | `number` | `5` | Maximum number of page buttons to show |
| `onPageChange` | `(page: number, itemsPerPage: number) => void` | `undefined` | Callback for page changes |
| `customItemsPerPage` | `number` | `undefined` | External control of items per page |
| `className` | `string` | `""` | Additional CSS classes |

## Usage Examples

### Basic Usage
```tsx
import { Project } from './components/features/Project';

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const getGlassCardClass = () => 
    isDarkMode 
      ? "bg-white/10 backdrop-blur-lg" 
      : "bg-white/80 backdrop-blur-lg";

  return (
    <Project
      activeProject={activeProject}
      setActiveProject={setActiveProject}
      isDarkMode={isDarkMode}
      getGlassCardClass={getGlassCardClass}
    />
  );
}
```

### Advanced Configuration
```tsx
<Project
  activeProject={activeProject}
  setActiveProject={setActiveProject}
  isDarkMode={isDarkMode}
  getGlassCardClass={getGlassCardClass}
  itemsPerPageOptions={[4, 8, 12, 16]}
  defaultItemsPerPage={8}
  maxPaginationButtons={7}
  onPageChange={(page, itemsPerPage) => {
    console.log(`Page ${page}, ${itemsPerPage} items`);
    // Analytics tracking
    analytics.track('project_pagination', { page, itemsPerPage });
  }}
  className="custom-project-container"
/>
```

### Minimal Setup
```tsx
<Project
  activeProject={activeProject}
  setActiveProject={setActiveProject}
  isDarkMode={isDarkMode}
  getGlassCardClass={getGlassCardClass}
  enableItemsPerPageSelector={false}
  showPaginationInfo={false}
  defaultItemsPerPage={9}
/>
```

## State Management

The component manages the following internal state:
- `currentPage`: Current pagination page
- `itemsPerPage`: Number of items displayed per page

External state required:
- `activeProject`: Currently highlighted project index
- `isDarkMode`: Theme state
- Project data via `useProjects` hook

## Performance Optimizations

1. **Memoized Calculations**: Pagination data is memoized using `useMemo`
2. **Optimized Callbacks**: Event handlers use `useCallback` to prevent unnecessary re-renders
3. **Lazy Loading**: Images use lazy loading for better performance
4. **Efficient Rendering**: Only current page projects are rendered

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Comprehensive ARIA labels and live regions
- **Focus Management**: Proper focus indicators and management
- **Color Contrast**: WCAG AA compliant color contrast ratios
- **Semantic HTML**: Proper use of semantic elements and roles

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Dependencies

- React 18+
- TypeScript 4.5+
- Lucide React (for icons)
- Custom hooks: `useProjects`

## Contributing

When contributing to this component:

1. Maintain TypeScript strict mode compliance
2. Add comprehensive prop documentation
3. Include accessibility testing
4. Test across all supported browsers
5. Update this README for any API changes

## License

Professional Development Team © 2025
