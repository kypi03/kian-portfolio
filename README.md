# Kian Pishvaie — Applied Chemistry & Materials Research Portfolio

A distinctive, luxury editorial personal research portfolio for **Kian Pishvaie**, Applied Chemistry graduate and early-career researcher.

Designed with a high-end scientific laboratory aesthetic:
- **Palette**: Deep Navy (`#071A2B`), Dark Blue (`#0B2942`), Scientific Blue (`#1A659E`), Warm Off-White (`#F5F3EE`), Soft Gray (`#D9DEE3`), and Accent Gold (`#D6A84F`).
- **Typography**: Editorial serif headings (`Cormorant Garamond`), clean Swiss interface (`Plus Jakarta Sans`), and technical data annotations (`JetBrains Mono`).
- **Interactive Visualizations**: Canvas electrochemical lattice simulation, interactive experimental cell schematics, DOE-ANN neural pipeline diagram, BibTeX citation copying, and dark/light mode toggle.
- **Strict Academic Integrity**: Preserves exact factual accuracy from the CV (University of Tehran, Dr. Majid Saidi, published review papers vs. ongoing experimental projects).

---

## 🚀 How to Run Locally

1. **Install dependencies** (already installed in this directory):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   This generates an optimized static bundle in the `dist/` folder.

---

## 🌐 100% Free Ways to Get a Live Link Accessible Everywhere

The application is completely static (React + Vite + TypeScript) and requires **no paid backend**. You can publish it for free using any of these methods:

### Option A: Drag & Drop to Netlify Drop (Fastest — 30 Seconds, No Git Required)
1. Run `npm run build` in this directory.
2. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)** in your web browser.
3. Drag and drop the `dist/` folder into the upload box.
4. Netlify will instantly give you a live HTTPS link (e.g. `https://kian-pishvaie.netlify.app`) that you can share with professors, admissions committees, and colleagues worldwide.

### Option B: Vercel (Recommended for Continuous Updates)
1. Push this folder to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of scientific research portfolio"
   git remote add origin https://github.com/<your-username>/kian-pishvaie-portfolio.git
   git push -u origin main
   ```
2. Log into **[vercel.com](https://vercel.com)** (free tier).
3. Click **Add New Project** → Select your repository → Click **Deploy**.
4. Vercel will automatically build and assign a permanent free live URL (e.g. `https://kian-pishvaie.vercel.app`).

### Option C: GitHub Pages (Free via Included GitHub Actions Workflow)
This project comes with `.github/workflows/deploy.yml` pre-configured.
1. Push the code to a GitHub repository.
2. In your GitHub repository, go to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and publish your website live to `https://<your-username>.github.io/<repo-name>/`.

### Option D: Instant Free CLI Deploy via Surge
```bash
npm run build
npx surge dist kian-pishvaie.surge.sh
```
This deploys the `dist/` folder immediately to `https://kian-pishvaie.surge.sh` for free.

---

## 📂 Project Architecture

```
kian-portfolio/
├── .github/workflows/deploy.yml # Automated GitHub Pages deployment
├── index.html                   # SEO metadata, Open Graph, Google fonts
├── netlify.toml                 # Netlify deployment configuration
├── package.json                 # Dependencies & build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Custom luxury scientific color palette
├── tsconfig.json                # TypeScript compiler config
├── vercel.json                  # Vercel deployment configuration
└── src/
    ├── App.tsx                  # Root component & theme provider
    ├── main.tsx                 # React entrypoint
    ├── index.css                # Global CSS & Swiss grid styling
    ├── types/
    │   └── index.ts             # Domain interfaces
    ├── data/
    │   └── portfolioData.ts     # Verified CV data
    └── components/
        ├── Navbar.tsx           # Sticky navigation & mobile drawer
        ├── Hero.tsx             # Intellectual headline & action triggers
        ├── ScientificCanvas.tsx # Subtle electrochemical lattice animation
        ├── ResearchPillars.tsx  # 4 Research pillars (Electrochemistry, Materials, Catalysis, Computation)
        ├── Projects.tsx         # Featured ongoing projects with interactive workflows & schematics
        ├── Publications.tsx     # Peer-reviewed papers with verified DOIs & BibTeX exporter
        ├── TechnicalExpertise.tsx # Laboratory & computational characterization grids
        ├── ExperienceEducation.tsx # University of Tehran B.Sc., Top 3% rank, TA, and software roles
        ├── AboutStatement.tsx   # Personal research statement & academic references
        ├── Contact.tsx          # Minimalist outreach terminal & email copy
        └── Footer.tsx           # Academic colophon & back-to-top trigger
```
