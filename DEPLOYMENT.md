# Portfolio Deployment Guide

## Quick Fix for Build Issues

If you encounter build errors, replace `next.config.mjs` with `next.config.simple.mjs`:

```bash
copy next.config.simple.mjs next.config.mjs
```

## Deployment Options

### 1. Vercel (Recommended)

**Prerequisites:**
- Install Vercel CLI: `npm i -g vercel`
- Create account at https://vercel.com

**Deploy:**
```bash
npm run deploy
# OR
vercel --prod
```

### 2. Netlify

**Option A - Drag & Drop:**
1. Run `npm run build`
2. Drag `.next` folder to https://app.netlify.com/drop

**Option B - Git Integration:**
1. Push code to GitHub
2. Connect repository in Netlify dashboard
3. Build settings are in `netlify.toml`

### 3. GitHub Pages (Static)

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"export": "next build && next export",
"deploy-gh": "npm run export && gh-pages -d out"

# Deploy
npm run deploy-gh
```

### 4. AWS Amplify

1. Push code to GitHub
2. Connect repository in AWS Amplify Console
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`

### 5. Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

## Environment Variables

If using Sentry, add these to your deployment platform:
- `SENTRY_AUTH_TOKEN`
- `SENTRY_ORG`
- `SENTRY_PROJECT`

## Troubleshooting

**Build fails with "document is not defined":**
- Use the simplified config: `next.config.simple.mjs`
- Ensure client-side code is wrapped in `useEffect` or `typeof window !== 'undefined'`

**Sentry errors:**
- Remove Sentry configuration or add proper environment variables
- Comment out Sentry imports in components if not needed

## Live Demo URLs

After deployment, update the README.md with your live URL:
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`
- GitHub Pages: `https://username.github.io/repository-name`