# Digital Footprint - Book Landing Page

A modern, conversion-focused landing page for the book "Digital Footprint for Software Engineers" by Vinit Shahdeo.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
digital-footprint/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with CTA
│   ├── BookCoverage.tsx    # What the book covers
│   ├── Author.tsx          # Author bio section
│   ├── WhyThisBook.tsx     # Trust-building section
│   ├── Purchase.tsx        # Purchase CTAs
│   └── Footer.tsx          # Footer with social links
├── public/
│   └── images/             # Add author photo here
└── package.json
```

## 🎨 Customization

### Add Author Photo

Place your author photo in `/public/images/vinit-shahdeo.jpg` and uncomment the Image component in `components/Author.tsx`:

```tsx
<Image
  src="/images/vinit-shahdeo.jpg"
  alt="Vinit Shahdeo"
  width={400}
  height={400}
  className="object-cover"
/>
```

### Update Purchase Links

Edit the href attributes in `components/Purchase.tsx` and `components/Hero.tsx` to point to your actual Amazon, Flipkart, and eBook links.

### Modify Social Links

Update social media URLs in `components/Footer.tsx` to match your profiles.

## 🔧 Built With

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📱 Features

- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Accessible (WCAG compliant)
- ✅ SEO optimized
- ✅ Fast page loads
- ✅ Modern, minimal design
- ✅ Conversion-focused CTAs

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

```bash
npm run build
```

Then push to GitHub and connect your repository to Vercel.

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting platform

## 📄 License

© Vinit Shahdeo. All rights reserved.

## 🤝 Contact

Vinit Shahdeo - [vinitshahdeo.com](https://vinitshahdeo.com)

---

**"Write code for machines. Build a footprint for people."**
