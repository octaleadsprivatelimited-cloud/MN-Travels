# MN Travels Frontend

Frontend application for MN Travels corporate transportation services.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Update `.env` with your backend API URL:
```
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

3. Set environment variables in Vercel dashboard:
   - `VITE_API_URL`: Your backend API URL (e.g., `https://your-backend.onrender.com/api`)

## Features

- React Router for navigation
- TailwindCSS for styling
- Framer Motion for animations
- Responsive design
- SEO optimized with React Helmet
- WhatsApp integration
- Admin dashboard for lead management

