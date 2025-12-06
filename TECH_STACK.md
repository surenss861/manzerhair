# Manzer Hair Studio - Tech Stack & Dependencies

## 🎯 Overview

Premium salon website built with modern, production-ready technologies designed for luxury aesthetics and exceptional performance.

---

## 💻 Core Tech Stack

### **Framework**
- **Next.js 14** (App Router)
  - File-based routing
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - Built-in image optimization
  - SEO optimization
  - API routes

### **Styling**
- **TailwindCSS** - Utility-first CSS framework
  - Rapid development
  - Consistent design system
  - Dark/light theme support
  - Responsive by default

### **UI Components**
- **ShadCN/UI** (built on Radix UI primitives)
  - Accessible components
  - Customizable design system
  - Premium feel out of the box
  - Components: Buttons, Cards, Dialogs, Accordions, Sheets, Hover Cards

### **Animations**
- **Framer Motion** - React animation library
  - Smooth transitions
  - Scroll animations
  - Hover interactions
  - Page transitions
  
- **GSAP** (optional, for advanced animations)
  - Cinematic scroll effects
  - Parallax animations
  - Complex timelines
  - Image sequence animations

### **Forms & Validation**
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Zod integration

### **Email & Backend**
- **Resend** - Modern email API
  - Contact forms
  - Booking inquiries
  - Newsletter confirmations

### **Icons**
- **Lucide React** - Beautiful, consistent icon library

### **Utilities**
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes intelligently
- **class-variance-authority** - Component variant management

### **Carousels**
- **Embla Carousel React** - Lightweight carousel library
  - Smooth scrolling
  - Touch/swipe support
  - Perfect for testimonials, galleries

### **Smooth Scrolling**
- **@lenis/react** - Buttery smooth scroll experience

---

## 📦 Optional Dependencies

### **CMS (Content Management)**
- **Sanity v3** - Headless CMS
  - Client-friendly editing interface
  - Real-time collaboration
  - Perfect for: Team bios, blog posts, services, gallery

---

## 🎨 Design System

### **Typography**
- **Headings**: Playfair Display (editorial, luxury feel)
- **Body**: Inter or Satoshi (clean, readable)

### **Color Palette** (Warm Editorial Luxury)
- Creams
- Soft browns
- Light gold accents
- Warm tones throughout

---

## 🚀 Installation

### Initial Setup

```bash
# Install all dependencies
pnpm install

# Install optional CMS dependencies (if using Sanity)
pnpm add next-sanity @sanity/client
```

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

---

## 📁 Project Structure

```
manzer-hair-studio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ...
├── components/            # React components
│   ├── ui/               # ShadCN/UI components
│   └── ...
├── lib/                   # Utilities & helpers
├── public/                # Static assets
├── styles/                # Global styles
└── types/                 # TypeScript types
```

---

## 🎯 Key Features Enabled by This Stack

1. **SEO Optimized** - Next.js SSR/SSG for perfect search rankings
2. **Fast Performance** - Image optimization, code splitting, lazy loading
3. **Premium Animations** - Framer Motion + GSAP for luxury feel
4. **Mobile-First** - Responsive design with TailwindCSS
5. **Accessible** - Radix UI ensures WCAG compliance
6. **Type-Safe** - Full TypeScript support
7. **Easy Forms** - React Hook Form + Zod validation
8. **Email Integration** - Resend for reliable email delivery

---

## 🔧 Additional Tools (Recommended)

- **Vercel Analytics** - Performance monitoring
- **OG Image Generation** - Auto-generate social share images
- **Sharp** - Image processing (included with Next.js)

---

## 📝 Notes

- All dependencies are production-ready and actively maintained
- Stack is optimized for luxury salon websites
- Easy to extend with additional features
- Perfect balance of performance and developer experience

