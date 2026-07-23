# Cloudflare Pages Deployment Guide

## Prerequisites
- A [Cloudflare](https://dash.cloudflare.com/sign-up) account (free)
- Your project pushed to a GitHub/GitLab repository

## 1. Push to Git

```bash
git remote add origin https://github.com/your-username/convert.git
git push -u origin main
```

## 2. Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **Pages**
3. Click **Connect to Git**
4. Authorize Cloudflare to access your repo
5. Select the `convert` repository

## 3. Build Settings

| Setting | Value |
|---|---|
| **Framework preset** | Astro |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` |
| **Node.js version** | 22 (or 20) |

Click **Save and Deploy**.

## 4. Custom Domain (Optional)

1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g. `dataconverter.app`)
4. Cloudflare will add DNS records automatically

## 5. Automatic Deploys

Every push to `main` triggers a production deploy. Every pull request gets a preview URL.

## 6. Build Output

The `dist/` folder contains the final site. Your directory structure will be:

```
dist/
├── index.html
├── docs/
│   └── index.html
├── robots.txt
├── sitemap-index.xml
├── sitemap-0.xml
└── assets/
    └── ...
```

## 7. Environment Variables (Not Needed)

This is a fully static site — no environment variables required.

## Done

Your site is live at `https://your-project.pages.dev` (or your custom domain).
