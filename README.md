# Pet's Need - Complete Pet Care Center Website

🐾 **All the Love, All the Care. All in One Place.**

A modern, SEO-optimized website for Pet's Need - Alipore's trusted all-in-one pet care center offering professional grooming, veterinary services, and quality pet supplies.

## 🌟 Features

- **Full-Stack Next.js 15** with App Router and TypeScript
- **SEO Optimized** for 100/100 Lighthouse scores
- **Responsive Design** - Mobile-first approach
- **6 Main Pages** - Home, Grooming, Clinic, Products, About, Contact
- **Custom 404 Page** - Playful error handling
- **Structured Data** - JSON-LD schema for better search visibility
- **Dynamic Components** - Interactive tabs, accordions, carousels
- **Performance Optimized** - Fast loading, lazy images, code splitting

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript 5.6
- **Styling**: TailwindCSS 3.4
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Fredoka, Quicksand, Poppins)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
petsneed/
├── app/
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── grooming/page.tsx    # Grooming services page
│   ├── clinic/page.tsx      # Veterinary clinic page
│   ├── products/page.tsx    # Pet supplies page
│   ├── about/page.tsx       # About us page
│   ├── contact/page.tsx     # Contact page
│   ├── not-found.tsx        # 404 error page
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt configuration
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section with carousel
│   ├── MobileCTABar.tsx     # Sticky mobile CTA
│   ├── ProductTabs.tsx      # Product category tabs
│   ├── StructuredData.tsx   # JSON-LD schema
│   └── ui/
│       ├── Button.tsx       # Reusable button component
│       ├── Card.tsx         # Card component
│       ├── Section.tsx      # Section wrapper
│       ├── Accordion.tsx    # FAQ accordion
│       └── Tabs.tsx         # Tab component
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies

```

## 🎨 Design System

### Colors
- **Primary**: #ff7a5c (Coral Orange)
- **Secondary**: #ffb4a0 (Light Peach)
- **Background**: #fff8f3 (Warm Cream)
- **Accent**: #a8e6cf (Mint Green)
- **Dark Teal**: #2d6659 (Footer, Headers)

### Typography
- **Headings**: Fredoka (600 weight)
- **Body**: Quicksand (400 weight)
- **Buttons**: Poppins (600 weight)

### Components
- Pre-built button variants (primary, secondary, icon)
- Card components with hover effects
- Section wrappers with background options
- Interactive accordions and tabs

## 🛠️ Installation

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd petsneed
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment to Vercel

### Quick Deploy

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Domain**
   - Add custom domain: `petsneed.in`
   - Update DNS settings as instructed
   - SSL certificate is auto-configured

### Build Settings (Auto-detected)
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 20.x

## 🔍 SEO Features

### Meta Tags
- Unique titles and descriptions for each page
- Open Graph tags for social sharing
- Twitter Card metadata
- Keywords optimized for local search

### Structured Data
- LocalBusiness schema
- VeterinaryCare schema
- PetStore schema
- AggregateRating display

### Sitemap & Robots
- Auto-generated XML sitemap
- Robots.txt configured
- All pages indexed

### Target Keywords
- Pet care center Alipore
- Pet grooming Kolkata
- Vet clinic Alipore
- Dog grooming Kolkata
- Cat grooming Kolkata
- Pet supplies Kolkata
- Veterinary doctor Kolkata

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML5 structure
- ARIA labels for icons
- Keyboard navigation support
- Color contrast ratios meet standards
- Screen reader friendly

## 🎯 Performance Targets

- **Lighthouse Performance**: 100/100
- **Lighthouse Accessibility**: 100/100
- **Lighthouse Best Practices**: 100/100
- **Lighthouse SEO**: 100/100
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 📞 Contact Information

**Pet's Need**
- **Address**: 10/1D, Diamond Harbour Road, Alipore, Kolkata 700027
- **Phone**: 7411576879
- **Email**: contact@petsneed.in
- **Hours**: 10 AM - 10 PM (Daily)

## 📄 Pages Overview

### 1. Home (`/`)
- Hero with auto-rotating carousel
- Trust bar with stats
- 3 service cards (Grooming, Clinic, Store)
- Why choose us section
- Customer testimonials
- Product categories preview
- FAQ section
- CTA section

### 2. Grooming (`/grooming`)
- Hero section
- 5 grooming service types
- Seasonal grooming tips
- Professional grooming benefits
- FAQ section

### 3. Clinic (`/clinic`)
- Hero section
- Important notice about appointments
- 3 doctor profiles
- 7 veterinary services
- When to visit the vet
- Pet wellness tips
- FAQ section

### 4. Products (`/products`)
- Hero section
- 6 category tabs (Pet Food, Treats, Toys, Accessories, Grooming, Health)
- 80+ products organized by category
- Visit store CTA
- Why shop with us
- FAQ section

### 5. About (`/about`)
- Hero section
- Our story (brand narrative)
- Mission statement
- 4 core values
- Stats section
- All 12 customer reviews
- Service areas

### 6. Contact (`/contact`)
- Hero section
- 4 quick contact cards
- Store hours
- Embedded Google Map
- Address and contact info
- FAQ section

### 7. 404 Error Page
- Playful design
- Confused pet illustration
- 3 CTA buttons (Home, Products, Call)

## 🔧 Customization

### Update Contact Information
Edit these files:
- `app/layout.tsx` - Metadata
- `components/Footer.tsx` - Footer links
- `components/StructuredData.tsx` - Schema data

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "#your-color",
  secondary: "#your-color",
  // ...
}
```

### Update Content
Each page is self-contained in its respective file under `app/`. Simply edit the content arrays and text.

## 📊 Analytics Setup (Optional)

Add Google Analytics 4:

1. Create file `app/analytics.tsx`
2. Add GA4 tracking code
3. Import in `app/layout.tsx`

## 🐛 Troubleshooting

### Build Errors
- Ensure Node.js 20.x is installed
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Font Loading Issues
- Fonts are loaded from Google Fonts CDN
- Network issues may cause retry warnings during build
- Fallback fonts are configured in `tailwind.config.ts`

### Image Loading
- Uses Next.js Image component for optimization
- External images require domain whitelisting in `next.config.js`
- Current config allows all HTTPS domains

## 📝 License

© 2025 Pet's Need. All rights reserved.

## 🤝 Support

For questions or support:
- Call: 7411576879
- Email: contact@petsneed.in
- Visit: 10/1D Diamond Harbour Road, Alipore, Kolkata

---

**Built with ❤️ for Pet's Need - Your pet's happy place in Alipore, Kolkata**
