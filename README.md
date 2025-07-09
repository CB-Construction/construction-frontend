# CB Construction - Future Building Solutions 🏗️

A modern, futuristic web application for CB Construction showcasing smart building solutions, sustainable technologies, and innovative construction services.

## ✨ Features

### 🎨 Design & UI
- **Dual Theme Support**: Seamless dark/light mode with system preference detection
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern Glass Morphism**: Beautiful glass card effects and backdrop blur
- **Animated Backgrounds**: Dynamic floating particles and gradient animations
- **Smooth Transitions**: Polished animations and hover effects

### 🚀 Core Functionality
- **Smart Dashboard**: Interactive project showcase with real-time statistics
- **Dynamic Theme Toggle**: Manual override with automatic system theme detection
- **Live Clock**: Real-time display in the header
- **Auto-rotating Projects**: Automatic project carousel with hover interactions
- **Contact Form**: Modern contact form with project type selection

### 🏢 Business Sections
- **Hero Section**: Compelling introduction with technology stack preview
- **Services**: Smart Commercial, Future Living, Digital Infrastructure, Adaptive Renovation
- **Featured Projects**: Showcase of major construction projects with progress tracking
- **Awards & Recognition**: Company achievements and certifications
- **Statistics**: Live company metrics and performance indicators
- **Technology**: Innovation showcase with AI, IoT, and sustainable tech

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern UI library with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Icons
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations and transitions
- **Custom Components** - Reusable, theme-aware components

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript Compiler** - Type checking and compilation
- **PostCSS** - CSS processing and optimization

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the application
pnpm build

# Preview the build
pnpm preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── contact.tsx      # Contact form with theme support
│   └── FuturisticParticles.tsx  # Animated background particles
├── pages/               # Main application pages
│   └── Dashboard.tsx    # Main dashboard page
├── assets/              # Static assets
├── App.tsx             # Root application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Key Components

### Dashboard (`/src/pages/Dashboard.tsx`)
- Main application page with all sections
- Theme management and state handling
- Responsive layout and navigation
- Integration of all business sections

### Contact (`/src/components/contact.tsx`)
- Theme-aware contact form
- Project type selection
- Responsive design
- Form validation ready

### FuturisticParticles (`/src/components/FuturisticParticles.tsx`)
- Animated background elements
- Performance optimized
- Mobile-friendly rendering

## 🎨 Theme System

The application features a sophisticated dual-theme system:

### Dark Mode (Default)
- Deep blue/slate gradients
- Glass morphism effects
- Cyan/purple accent colors
- High contrast for readability

### Light Mode
- Clean white backgrounds
- Warm subtle gradients
- Enhanced contrast ratios
- Eye-comfortable design

### Theme Features
- **System Detection**: Automatically detects user's system preference
- **Manual Override**: Toggle button for user preference
- **Persistent State**: Maintains theme choice across sessions
- **Smooth Transitions**: Animated theme switching

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Enhanced layouts for tablet screens
- **Desktop Enhanced**: Full-featured desktop experience
- **Touch Friendly**: Optimized touch targets and interactions

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` with:
- Custom color schemes
- Extended spacing and sizing
- Animation utilities
- Typography enhancements

### Vite Configuration
Optimized build settings in `vite.config.ts`:
- React plugin configuration
- Build optimization
- Development server settings

## 📦 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint

# Alternative with npm
npm run dev
npm run build
npm run preview
npm run lint
```

## 🚀 Deployment

The application is built as a static site and can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Build Output
- Optimized and minified assets
- Tree-shaken JavaScript bundles
- Compressed CSS files
- Static HTML generation

## 🎯 Performance Features

- **Code Splitting**: Automatic code splitting for optimal loading
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Compressed images and assets
- **Lazy Loading**: Components loaded on demand
- **Responsive Images**: Optimized for different screen sizes

## 🔒 Best Practices

- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Reusable and maintainable components
- **Accessibility**: ARIA labels and keyboard navigation
- **SEO Ready**: Semantic HTML and meta tags
- **Performance**: Optimized rendering and animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for CB Construction Sri Lanka.

## 📧 Contact

For support or inquiries:
- **Email**: future@cbconstruction.lk
- **Phone**: +94 77 352 8200
- **Address**: 123 Future Avenue, Colombo 03, Sri Lanka

---

**Built with ❤️ for the future of construction in Sri Lanka**
