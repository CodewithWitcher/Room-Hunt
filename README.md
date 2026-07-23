# Flat Requirement Showcase Website (Next.js + Glassmorphism)

A modern, glassmorphism-styled single-page web app built with **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **`react-qr-code`**. Designed for showcasing personal housing requirements (1 BHK / 2 BHK) near Sector 59, Noida.

![Glassmorphism Flat Showcase](https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/og.png)

---

## 🌟 Key Features

- **Glassmorphism Design**: Frosted glass panels (`backdrop-blur`), translucent backgrounds, and ambient floating glowing orbs.
- **Rolling News Banner**: Auto-sliding marquee banner at the top highlighting shifting date, budget, location, and contact options.
- **Detailed 1 BHK & 2 BHK Specification Cards**: Itemized checklists for Bedrooms, Almirah, Modular Kitchen (RO + Exhaust), Washrooms (Geyser), and Hall. Includes a toggle to switch between views.
- **Interactive Location Showcase**: Displays 15+ preferred sectors (Sector 62, 64, 65, 58, 57, 56, 55, 53, 60, 61, 71, 81, 76, Indrapuram, Bishanpura) with an interactive sector filter and metro connectivity badge (< 5 km).
- **Dynamic WhatsApp QR Code**: Renders a dynamic QR code using `react-qr-code` that opens direct WhatsApp chat upon scanning.
- **One-Tap Contact Actions**: Quick Click-to-Call, Click-to-WhatsApp, and "Copy Phone Number" with feedback toast.
- **Mobile-First Responsive Layout**: Includes a sticky bottom action bar on mobile devices.
- **Vercel / Netlify Single-Push Deployment**: Zero-configuration ready.

---

## 📋 Data Configuration

All website content, budgets, phone numbers, and location tags are centralized in a single TypeScript configuration file for quick editing:

📁 `src/data/siteConfig.ts`

```typescript
export const siteConfig = {
  primaryLocation: "Sector 59, Noida",
  shiftWindow: "15th August 2026 – 23rd August 2026",
  phoneNumber: "+916307922029",
  whatsappNumber: "916307922029",
  // Edit preferred locations, budgets, or messages here anytime!
};
```

---

## 🚀 Quick Setup & Local Development

### Prerequisites
- Node.js 18.x or higher
- npm / yarn / pnpm

### 1. Installation

```bash
# Install all required dependencies
npm install
```

### 2. Run Locally in Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production

```bash
npm run build
```

---

## 🌐 Deploying to Vercel / Netlify

### Deploy on Vercel (Recommended)

1. Push your repository to **GitHub**.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository (`Room-Hunt`).
4. Select Framework Preset: **Next.js**.
5. Click **"Deploy"**. Vercel will automatically build and publish your site!

### Deploy on Netlify

1. Log in to [Netlify](https://netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
2. Select GitHub and choose your repository.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Click **"Deploy Site"**.

---

## 🛠️ Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css          # Glassmorphism utilities & ambient glow CSS
│   │   ├── layout.tsx           # SEO Metadata & Google Fonts setup
│   │   └── page.tsx             # Main showcase page assembling components
│   ├── components/
│   │   ├── HeaderBanner.tsx     # Rolling news marquee header
│   │   ├── HeroSection.tsx      # Main title, shift deadline, & quick actions
│   │   ├── RequirementCards.tsx # 1BHK vs 2BHK detailed cards & view toggle
│   │   ├── LocationPills.tsx    # Sector tags with search & metro note
│   │   ├── ContactQRSection.tsx # WhatsApp QR code & copy phone trigger
│   │   ├── FloatingQuickContact.tsx # Mobile sticky bottom navigation
│   │   └── GlassCard.tsx        # Reusable frosted glass wrapper
│   └── data/
│       └── siteConfig.ts        # Centralized specifications & contact info
├── tailwind.config.ts           # Custom colors & keyframe animations
├── next.config.mjs
└── package.json
```

---

## 📄 License

MIT License. Free to use and customize!
