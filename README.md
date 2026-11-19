# Valam Food Directory (வளம் உணவு வழிகாட்டி)

A premium, responsive **Static Catering Business Directory** website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide React Icons**, inspired by the authentic catering standards of [Good Food Catering](https://www.goodfoodcatering.org/).

The directory highlights authentic Tamil Nadu catering specialists, with a dedicated spotlight on **Valam Caterers**, located in Chettipalayam, Opposite KVB Bank, P.N. Road, Tirupur.

---

## 🚀 Live Demo & Vercel Deployment

This project is 100% frontend-only and configured for static export (`output: 'export'`), making it ready for instant, zero-configuration deployment to **Vercel**, **GitHub Pages**, or any static web host.

### Direct Vercel Deployment Steps:
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete Valam Caterers directory static website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/valam-caterers-directory.git
   git push -u origin main
   ```
2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/new).
   - Import your GitHub repository `valam-caterers-directory`.
   - Framework Preset: **Next.js**.
   - Build Command: `npm run build`.
   - Output Directory: `out` (automatically detected by Vercel for static export).
3. **Deploy**:
   - Click **Deploy**. Your directory is live globally on Vercel's Edge Network!

---

## 🛠️ Tech Stack (Strictly Frontend Static)

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Static Export**: `output: 'export'` in `next.config.ts`
- **Dynamic SSG**: `generateStaticParams()` for business profile pages
- **SEO API**: Next.js Metadata API, `sitemap.xml`, and `robots.txt`
- **Bilingual Context**: English & Tamil (தமிழ்) toggle

---

## 🌟 Highlighted Business: Valam Caterers

| Property | Details |
| :--- | :--- |
| **Business Name** | Valam Caterers (வளம் கேட்டரர்ஸ்) |
| **Category** | Caterers (Full-Service / Festive Feasts) |
| **City** | Tirupur |
| **Area** | P.N. Road, Chettipalayam |
| **Address** | Chettipalayam, Opposite KVB Bank, P.N. Road, Tirupur, Tamil Nadu, India. |
| **Source** | Justdial Verified |
| **Source Profile** | [Justdial Link](https://www.justdial.com/Tirupur/Valam-Caterers-Chettipalayamopposite-Kvb-Bank-Pn-Road/9999PX421-X421-240506201534-I1C9_BZDET) |
| **Google Maps** | [Google Maps Navigation Link](https://www.google.com/maps/search/?api=1&query=Valam+Caterers+Chettipalayam+Opposite+KVB+Bank+PN+Road+Tirupur+Tamil+Nadu) |
| **Directory Grouping** | Displayed under **Tirupur Caterers**, **Caterers in P.N. Road**, and **Recently Added Businesses** |
| **Data Integrity** | Authentic directory information; no fabricated phone numbers, ratings, or timings |

---

## 📑 Website Pages & Routes

1. **Homepage (`/`)**:
   - Professional Header with logo and navigation
   - Hero Section:
     - Heading: *"Find the Best Catering Services Near You"*
     - Subtitle: *"Discover trusted catering services for weddings, parties and special occasions."*
   - Interactive multi-field search bar (business name, city, category)
   - Valam Caterers Spotlight Banner (Chettipalayam, P.N. Road, Tirupur)
   - Popular Categories (Wedding, Pure Veg Sadya, Corporate, Party)
   - Featured Businesses
   - Recently Added Businesses (featuring Valam Caterers)
   - Browse by City (Tirupur, Coimbatore, Chennai, Madurai, Salem)
   - Event Catering Quote Promotional Banner
   - Free Business Listing CTA Section
   - Professional Footer with regional links and Justdial source attribution

2. **Dedicated Business Listing Directory (`/caterers`)**:
   - Real-time keyword search (matches name, area, address, specialties)
   - Filter by City (Tirupur, Coimbatore, Chennai, Madurai, Salem)
   - Filter by Category (All Caterers, Wedding, Pure Veg, Corporate, Party)
   - Filter by Area (P.N. Road, Chettipalayam, Valasaravakkam, etc.)
   - "Recently Added Only" filter toggle
   - Sort by Recently Added or Alphabetical (A-Z)
   - Switch between Grid and List view layouts
   - Active filter tags with one-click removal

3. **Dynamic-Looking Business Details Pages (`/caterers/[slug]`)**:
   - Pre-rendered statically with `generateStaticParams()`
   - Complete details for **Valam Caterers** (`/caterers/valam-caterers-tirupur`)
   - High-resolution banquet imagery with gallery selector
   - Verified address and landmark details
   - Google Maps external navigation button
   - Justdial source attribution badge & direct external link
   - Interactive Quote / Callback Inquiry form modal
   - Nearby related caterers in the same locality

4. **Browse by City (`/cities`)**:
   - Regional hub cards for Tirupur, Coimbatore, Chennai, Madurai, Salem
   - Special highlight on Tirupur caterers and P.N. Road corridor

5. **Browse by Category (`/categories`)**:
   - Wedding Caterers, Pure Veg Sadya, Corporate Buffets, Party Feasts

6. **Free Business Listing Submission (`/add-listing`)**:
   - Interactive frontend submission form with live validation and confirmation

7. **About Us (`/about`)**:
   - Mission and inspiration based on `goodfoodcatering.org` culinary standards
   - Emphasis on hygiene, FSSAI compliance, and verified public directory records

8. **Contact Us (`/contact`)**:
   - Support, directory inquiries, and verification requests

9. **SEO & Discovery**:
   - `sitemap.xml` generated automatically at build time
   - `robots.txt` configured for full search indexing
   - OpenGraph and Twitter cards for all routes
   - Custom 404 page (`/_not-found`)

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# Open http://localhost:3000 in your browser

# Build static production export
npm run build

# Preview static export folder (/out)
npx serve out
```

