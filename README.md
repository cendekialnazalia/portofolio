# Cendekia Luthfieta Nazalia — Portfolio Dossier

Aplikasi web portofolio statis (React + TypeScript + Vite + Tailwind CSS v4) yang sudah siap di-deploy ke **Vercel**.

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

## Build Produksi

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

### Cara 1: Via Dashboard Vercel (Direkomendasikan)
1. Push repository ini ke GitHub / GitLab / Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new) dan import repository tersebut.
3. Vercel otomatis membaca `vercel.json` dengan pengaturan:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Klik **Deploy** (tidak perlu environment variable tambahan karena aplikasi ini sepenuhnya static frontend).

### Cara 2: Via Vercel CLI
```bash
npm i -g vercel
vercel --prod
```
