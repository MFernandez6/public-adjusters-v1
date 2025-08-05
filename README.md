# Fernandez Public Adjusters, LLC - Website

A professional, modern website for Fernandez Public Adjusters, LLC built with Next.js, TypeScript, Shadcn/ui, and Tailwind CSS.

## 🏢 About

Fernandez Public Adjusters, LLC is a licensed public adjusting firm that helps policyholders maximize their insurance claim settlements. This website provides a professional online presence with comprehensive information about services, contact details, and resources for potential clients.

## 🚀 Features

- **Modern Design**: Clean, professional design with navy blue and gold color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Contact Forms**: Integrated contact forms for claim evaluations
- **Service Pages**: Detailed information about all services offered
- **Blog Section**: Educational content about insurance claims and public adjusting
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   ├── header.tsx        # Header component
│   ├── hero.tsx          # Hero section
│   └── footer.tsx        # Footer component
└── lib/                  # Utility functions
    └── utils.ts          # Shadcn/ui utilities
```

## 🎨 Design System

### Colors

- **Primary**: Navy blue (`oklch(0.2 0.05 240)`)
- **Secondary**: Gold accent (`oklch(0.95 0.02 45)`)
- **Background**: Light gray (`oklch(0.98 0 0)`)
- **Text**: Dark gray (`oklch(0.145 0 0)`)

### Typography

- **Font**: Geist Sans (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

## 📱 Pages

### Home Page (`/`)

- Hero section with call-to-action
- Services overview
- Why choose us section
- Contact form integration

### About Page (`/about`)

- Company mission and values
- Team information
- Why choose us details
- Call-to-action section

### Services Page (`/services`)

- Comprehensive service listings
- Property damage claims
- Business interruption claims
- Specialized services
- Process explanation

### Contact Page (`/contact`)

- Contact form
- Office information
- Business hours
- Emergency contact

### Blog Page (`/blog`)

- Featured articles
- Blog post grid
- Newsletter signup
- Category filtering

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd public-adjuster-v1
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Header Component

- Sticky navigation
- Contact information in top bar
- Mobile-responsive menu
- Call-to-action button

### Hero Section

- Compelling headline
- Contact form integration
- Feature highlights
- Multiple call-to-action buttons

### Footer Component

- Company information
- Contact details
- Social media links
- Newsletter signup
- Quick links

## 📞 Contact Information

- **Phone**: (786) 417-3869
- **Email**: Claims@FernandezAdjusters.com
- **Address**: 1700 NW North River Drive, Miami, Florida 33125
- **License**: XXXXXXX

## 🔧 Customization

### Updating Contact Information

Edit the contact information in:

- `src/components/header.tsx`
- `src/components/footer.tsx`
- `src/app/contact/page.tsx`

### Changing Colors

Modify the color scheme in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.2 0.05 240); /* Navy blue */
  --secondary: oklch(0.95 0.02 45); /* Gold */
  /* ... other colors */
}
```

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/header.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:

```bash
npm run build
```

The built files will be in the `.next` directory.

## 📈 SEO Features

- Meta tags for all pages
- Structured data markup
- Optimized images
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary software for Fernandez Public Adjusters, LLC.

## 🆘 Support

For support or questions about the website, contact:

- **Email**: Claims@FernandezAdjusters.com
- **Phone**: (786) 417-3869

---

Built with ❤️ for Fernandez Public Adjusters, LLC
# public-adjusters-v1
