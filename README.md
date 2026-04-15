# 🚀 Modern Portfolio - Next.js + Tailwind CSS + TypeScript

A beautiful, modern, and fully responsive portfolio built with cutting-edge technologies.

## ✨ Features

- ⚡ **Next.js 14** - Latest framework with App Router
- 🎨 **Tailwind CSS** - Utility-first styling
- 📘 **TypeScript** - Type-safe development
- 🌓 **Dark/Light Mode** - Smooth theme switching
- ✨ **Smooth Animations** - Framer Motion animations
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **SEO Optimized** - Meta tags & structured data
- 🚀 **Performance** - Optimized for speed
- 🧩 **Reusable Components** - UI component library included

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Content

Edit the following files to add your information:
- `src/components/Hero.tsx` - Your name and bio
- `src/components/About.tsx` - About section
- `src/components/Skills.tsx` - Technical skills
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact information

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Contact.tsx         # Contact & Footer
│   ├── ui/                 # Reusable UI components
│   └── providers/          # Context providers
├── lib/
│   ├── cn.ts              # Utility functions
│   └── animations.ts      # Animation presets
└── hooks/                 # Custom React hooks
```

## 🎨 Customization

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Update Social Links

Edit `src/components/Contact.tsx` to add your social links.

### Add New Sections

Create new components and import them in `src/app/page.tsx`.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages

```bash
# Build for static export
npm run build

# Deploy using gh-pages
npm run deploy
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=.next
```

## 📚 Documentation

- [Setup Guide](./SETUP_GUIDE.md) - Detailed setup instructions
- [Implementation Guide](./Implementation_Guide.md) - Code examples
- [Portfolio Feedback](./Portfolio_Review_and_Feedback.md) - Improvement suggestions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

Need help? Check the documentation files or create an issue.

---

Made with ❤️ by Shivam Maurya
