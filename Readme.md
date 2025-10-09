# 🚀 Modern CSE Student Portfolio

A stunning, responsive portfolio website built for Computer Science Engineering students. Features a modern design with dark/light mode toggle, smooth animations, and mobile-first responsive layout.


## ✨ Features

- 🎨 **Modern Design** - Clean, contemporary UI with glassmorphism effects
- 🌓 **Dark/Light Mode** - Toggle between themes with system preference detection
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Custom CSS animations and hover effects
- 🔧 **TypeScript** - Type-safe development experience
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Next-generation frontend build tool

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Custom CSS Animations** - Hand-crafted transitions and effects

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixes

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SudiptaMandal-007/Portfolio.git
   cd cse-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Home.tsx        # Home section
│   ├── About.tsx       # About section with profile
│   ├── Skills.tsx      # Skills and technologies
│   ├── Projects.tsx    # Project showcase
│   ├── Education.tsx   # Education and certifications
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and animations
```

## 🎨 Customization

### Personal Information
Update your personal details in the following components:
- `Home.tsx` - Name, title, and introduction
- `About.tsx` - Profile image, bio, and quick facts
- `Contact.tsx` - Contact information and social links

### Projects
Add your projects in `Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'project-image-url',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://sudipta-portfolio-007.vercel.app/',
    githubUrl: 'https://github.com/DipD007/Portfolio.git',
    // ... other properties
  }
];
```

### Colors & Styling
The project uses Tailwind CSS. You can customize:
- **Colors**: Modify gradient combinations in components
- **Animations**: Update CSS animations in `index.css`
- **Layout**: Adjust spacing and sizing using Tailwind classes

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)
- **Large Screens**: Optimized for large displays (1280px+)

## 🌟 Key Sections

### 1. Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Social media links
- Animated background elements

### 2. About Section
- Professional profile image
- Personal introduction
- Quick facts and stats
- Training and certifications

### 3. Skills Section
- Categorized skill sets
- Progress bars with animations
- Technology icons
- Proficiency levels

### 4. Projects Section
- Project showcase cards
- Live demo and GitHub links
- Technology tags
- Responsive grid layout

### 5. Education Section
- Academic background
- Certifications with links
- Achievement highlights
- Timeline design

### 6. Contact Section
- Contact form
- Social media links
- Contact information
- Interactive elements

## 🎯 Performance Features

- **Lazy Loading** - Images load as needed
- **Optimized Assets** - Compressed images and icons
- **Minimal Bundle** - Tree-shaking and code splitting
- **Fast Rendering** - Efficient React components
- **Smooth Animations** - Hardware-accelerated CSS transitions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/cse-portfolio/issues).

## 📞 Support

If you have any questions or need help customizing the portfolio:
- Create an issue on GitHub
- Reach out via the contact form on the website

## 🙏 Acknowledgments

- **Pexels** - For providing high-quality stock images
- **Lucide** - For the beautiful icon set
- **Tailwind CSS** - For the utility-first CSS framework
- **React Team** - For the amazing React library

---

**Made with ❤️ by Sudipta Mandal**

*Don't forget to star ⭐ this repository if you found it helpful!*
