# AI/ML & Full-Stack Developer Portfolio

A modern, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by BraydenTW's portfolio style, customized for an AI/ML + Full-Stack Developer.

## Features

- ✨ **Modern Animations** - Smooth animations using Framer Motion
- 🎨 **Beautiful UI** - Gradient backgrounds, particle effects, and modern design
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🚀 **Performance Optimized** - Built with Next.js 14 for optimal performance
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 🌙 **Dark Theme** - Beautiful dark theme with gradient accents

## Sections

- **Hero** - Animated landing section with particle effects
- **About** - Professional introduction and expertise areas
- **Skills** - Technical and soft skills with progress bars
- **Projects** - Featured projects with live demos and GitHub links
- **Experience** - Timeline of work experience and internships
- **Education** - IIT B.Tech details with coursework
- **Certifications** - Professional certifications and achievements
- **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Name**: Edit `components/sections/Hero.tsx` - replace `[Your Name]`
2. **Email**: Update email addresses in:
   - `components/sections/Hero.tsx`
   - `components/sections/Contact.tsx`
   - `components/Footer.tsx`
3. **Social Links**: Update URLs in:
   - `components/sections/Hero.tsx`
   - `components/sections/Contact.tsx`
   - `components/Footer.tsx`

### Update Projects

Edit `components/sections/Projects.tsx` to add/modify your projects.

### Update Experience

Edit `components/sections/Experience.tsx` to add your work experience.

### Update Education

Edit `components/sections/Education.tsx` to update your education details.

### Update Skills

Edit `components/sections/Skills.tsx` to customize your skills and proficiency levels.

### Profile Photo

Replace the placeholder avatar in `components/sections/About.tsx` with your actual profile photo.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Intersection Observer**: react-intersection-observer

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── Footer.tsx           # Footer component
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Skills.tsx       # Skills section
│       ├── Projects.tsx     # Projects section
│       ├── Experience.tsx   # Experience section
│       ├── Education.tsx    # Education section
│       ├── Certifications.tsx # Certifications section
│       └── Contact.tsx      # Contact section
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## License

MIT License - feel free to use this portfolio for your own projects!

## Credits

- Inspired by [BraydenTW's portfolio](https://github.com/BraydenTW/braydentw.io)
- Built with Next.js and Tailwind CSS

