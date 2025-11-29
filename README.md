# Personal Portfolio Website

A modern, dark-themed personal portfolio website featuring heavy animations, 3D visuals, and interactive backgrounds. Built with React.js and designed with a cyberpunk aesthetic.

## 🚀 Features

- **Interactive 3D Hero Section** - Animated sphere using Three.js
- **Particle Background** - Dynamic particle effects throughout the site
- **Smooth Page Transitions** - Fluid animations using Framer Motion
- **Responsive Design** - Optimized for all devices
- **Dark Cyberpunk Theme** - Neon colors with glassmorphism effects
- **Multiple Sections:**
  - Home with personal branding
  - About Me page
  - Interactive Projects showcase
  - Animated Skills visualization
  - Contact form
  - Featured Articles
  - Coding Profiles display
  - Downloadable Resume

## 🛠️ Technology Stack

### Core
- **React 18.3** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Accessible component primitives

### Animations & 3D
- **Framer Motion** - Page and component animations
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Three.js helpers
- **Particles.js** - Interactive particle backgrounds

### Other Libraries
- **React Query** - Data fetching and caching
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd <project-name>

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Hero3D.tsx       # 3D animated sphere
│   ├── Navigation.tsx   # Main navigation
│   ├── ParticleBackground.tsx
│   ├── PageTransition.tsx
│   └── SocialLinks.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Resume.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Articles.tsx
│   └── CodingProfiles.tsx
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Design System

The project uses a custom cyberpunk-themed design system with:
- **Primary Color**: Electric Cyan (`#06b6d4`)
- **Secondary Color**: Deep Purple (`#a855f7`)
- **Accent Color**: Magenta (`#ec4899`)
- **Glassmorphism Effects**: Blur and transparency
- **Neon Glow Shadows**: CSS custom properties
- **Custom Animations**: Float, pulse, slide effects

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Deployment

Build the project:
```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🎯 Key Features Explained

### 3D Animations
The homepage features an interactive 3D sphere created with Three.js that responds to user interaction via orbit controls.

### Particle System
Background particles create an immersive cyberpunk atmosphere and respond to mouse movement.

### Page Transitions
Each page transition uses Framer Motion for smooth, animated navigation between routes.

### Skills Visualization
Animated progress bars showcase technical proficiency with smooth reveal animations.

### Project Cards
Interactive project cards with hover effects and expandable modals for detailed information.

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Hamburger menu for mobile navigation
- Optimized 3D performance on smaller devices
- Touch-friendly interactive elements

## 🔧 Customization

### Colors
Edit `src/index.css` to customize the color scheme. All colors use HSL format and CSS custom properties.

### Content
- Update personal information in `src/pages/Home.tsx`
- Modify bio in `src/pages/About.tsx`
- Add projects in `src/pages/Projects.tsx`
- Update skills in `src/pages/Skills.tsx`

### Animations
Adjust animation timings and effects in `tailwind.config.ts` and component files.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/JOKER1711790)
- LinkedIn: [Your Name](https://www.linkedin.com/in/tarun-kumar-s-a-56369b384/)
- Email: sa.tarunkumar31@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- shadcn/ui for the beautiful component library
- Three.js community for 3D graphics resources
