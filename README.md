---

 <div align="center">

# ☁️ AWS Cloud Practitioner Portfolio

### A Modern, Responsive Portfolio Showcasing Cloud Engineering Expertise

<a href="https://github.com/Thiyagu-2003">
  <img src="https://img.shields.io/badge/Made%20By-Thiyagu%20S-brightgreen?logo=github" />
</a>

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

<p align="center">
  <a href="https://www.thiyagu.cloud">
    <img src="https://img.shields.io/badge/🌐%20Live%20Demo-2ea44f?style=for-the-badge&logo=google-chrome" />
  </a>
  
  <a href="https://github.com/Thiyagu-2003/My-Porthfolio-New/issues" style="margin-left: 10px;">
    <img src="https://img.shields.io/badge/📝%20Report%20Bug-d73a4a?style=for-the-badge&logo=bugatti" />
  </a>

  <a href="https://github.com/Thiyagu-2003/My-Porthfolio-New/issues" style="margin-left: 10px;">
    <img src="https://img.shields.io/badge/✨%20Request%20Feature-8a2be2?style=for-the-badge&logo=sparkles" />
  </a>
</p>



</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎨 Design](#-design)
- [🚀 Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [💻 Development](#-development)
- [🏗️ Build](#️-build)
- [📁 Project Structure](#-project-structure)
- [🌟 Highlights](#-highlights)
- [👤 Author](#-author)
- [📄 License](#-license)

---

## ✨ Features

<table>
  <tr>
    <td>🎨</td>
    <td><b>Modern UI/UX</b></td>
    <td>Clean, professional design with smooth animations</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><b>Fully Responsive</b></td>
    <td>Optimized for all devices - mobile, tablet, and desktop</td>
  </tr>
  <tr>
    <td>🌓</td>
    <td><b>Dark Mode</b></td>
    <td>Toggle between light and dark themes</td>
  </tr>
  <tr>
    <td>⚡</td>
    <td><b>Lightning Fast</b></td>
    <td>Built with Vite for optimal performance</td>
  </tr>
  <tr>
    <td>🎯</td>
    <td><b>Type Safe</b></td>
    <td>Written in TypeScript for better code quality</td>
  </tr>
  <tr>
    <td>♿</td>
    <td><b>Accessible</b></td>
    <td>Follows web accessibility standards</td>
  </tr>
</table>

---

## 🎨 Design

### Typography
- **Headings**: [Poppins](https://fonts.google.com/specimen/Poppins) - Modern, geometric sans-serif
- **Body**: [Inter](https://fonts.google.com/specimen/Inter) - Highly legible, optimized for screens

### Color Palette
- Professional gradient background
- Indigo accent colors for CTAs
- Dark mode with carefully selected contrast ratios

### Components
```
├── 🏠 Hero Section - Eye-catching introduction with animated elements
├── 👤 About - Professional background and expertise
├── 🎓 Education - Academic qualifications
├── 💼 Projects - Portfolio showcasing cloud projects
├── 🛠️ Skills - Technical skills with visual indicators
└── 📬 Contact - Easy ways to get in touch
```

---

## 🚀 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend Framework** | React 18.3.1 |
| **Language** | TypeScript 5.5.3 |
| **Build Tool** | Vite 5.4.21 |
| **Styling** | Tailwind CSS 3.4.1 |
| **Icons** | Lucide React 0.344.0 |
| **Code Quality** | ESLint 9.9.1 |

---

## 📦 Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Clone the Repository

```bash
git clone https://github.com/Thiyagu-2003/My-Porthfolio-New.git
cd My-Porthfolio-New
```

### Install Dependencies

```bash
npm install
```

---

## 💻 Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🏗️ Build

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
My-Portfolio-New/
├── 📂 public/              # Static assets
├── 📂 src/
│   ├── 📂 components/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── AIDemo.tsx
│   ├── 📂 data/           # Data files
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies
```

---

## 🌟 Highlights

### Performance Optimizations
- ⚡ **Vite** for blazing-fast builds and HMR
- 📦 **Code splitting** for optimal bundle sizes
- 🎯 **Lazy loading** for better initial load times
- 🖼️ **Optimized fonts** with preconnect

### Best Practices
- ✅ **TypeScript** for type safety
- ✅ **ESLint** for code quality
- ✅ **Component-based** architecture
- ✅ **Responsive** design patterns
- ✅ **Accessibility** features

### Professional Features
- 🎨 **Modern design** with smooth animations
- 🌓 **Dark mode** toggle
- 📱 **Mobile-first** approach
- ♿ **WCAG compliant** accessibility
- 🔍 **SEO optimized**

---

## 📝 Customization

### Update Personal Information

Edit the data files in `src/data/` to customize:
- Projects
- Skills
- Education
- Contact information

### Modify Theme

Update `tailwind.config.js` to change:
- Colors
- Fonts
- Breakpoints
- Spacing

### Change Fonts

Fonts are configured in:
- `index.html` - Google Fonts import
- `tailwind.config.js` - Font family definitions

---

# 👤 **Author**

```
Name: Thiyagu S
Role: Cloud & DevOps Learner
Location: India 🇮🇳
GitHub: Thiyagu-2003
```
---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

# ❤️ **Footer**

<p align="center">
  <strong>Made with ❤️ by <a href="https://github.com/Thiyagu-2003">Thiyagu S</a></strong><br>
  Learning • Building • Improving
</p>

---









