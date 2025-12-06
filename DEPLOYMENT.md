# Deployment Guide - MN Travels

This guide will help you deploy the MN Travels application to production.

## Prerequisites

- MongoDB database (MongoDB Atlas recommended for cloud)
- GitHub account (for version control)
- Vercel account (for frontend)
- Render/Railway account (for backend)

## Step 1: Set Up MongoDB

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for all IPs in production)
5. Get your connection string (format: `mongodb+srv://username:password@cluster.mongodb.net/mn-travels`)

## Step 2: Deploy Backend (Render/Railway)

### Option A: Render

1. Go to https://render.com and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** mn-travels-backend
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Root Directory:** `backend`

5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `5000` (or leave auto)
   - `MONGODB_URI` = Your MongoDB connection string
   - `JWT_SECRET` = A strong random string (generate with: `openssl rand -base64 32`)

6. Click "Create Web Service"
7. Wait for deployment to complete
8. Copy your backend URL (e.g., `https://mn-travels-backend.onrender.com`)

### Option B: Railway

1. Go to https://railway.app and sign up/login
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add a new service → Select the `backend` folder
5. Add Environment Variables:
   - `MONGODB_URI` = Your MongoDB connection string
   - `JWT_SECRET` = A strong random string
   - `NODE_ENV` = `production`

6. Railway will auto-detect Node.js and deploy
7. Copy your backend URL

## Step 3: Deploy Frontend (Vercel)

1. Go to https://vercel.com and sign up/login
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. Add Environment Variable:
   - `VITE_API_URL` = Your backend API URL (e.g., `https://mn-travels-backend.onrender.com/api`)

6. Click "Deploy"
7. Wait for deployment to complete
8. Your site will be live at `https://your-project.vercel.app`

## Step 4: Update Configuration

### Update Sitemap
Edit `frontend/public/sitemap.xml` and replace `https://your-domain.com` with your actual domain.

### Update WhatsApp Number
Edit `frontend/src/components/WhatsAppButton.jsx` and update the `whatsappNumber` variable with your actual WhatsApp number.

### Update Contact Information
Update contact details in:
- `frontend/src/components/Footer.jsx`
- `frontend/src/pages/Contact.jsx`

## Step 5: Change Default Admin Credentials

1. Log in to your admin dashboard with default credentials (admin/admin123)
2. For production, you should:
   - Create a new admin user via MongoDB
   - Or update the default admin password in the database

To create a new admin via MongoDB:
```javascript
// In MongoDB shell or Compass
use mn-travels
db.admins.insertOne({
  username: "your-username",
  password: "$2a$10$hashedPasswordHere", // Use bcrypt to hash
  email: "your-email@example.com"
})
```

Or use a tool like Postman to create an admin via API (you'll need to add a signup endpoint).

## Step 6: Seed Initial Data (Optional)

You can add initial vehicles to your database:

```javascript
// In MongoDB Compass or shell
use mn-travels
db.vehicles.insertMany([
  {
    name: "04 Seater Sedan",
    type: "sedan",
    capacity: "4",
    description: "Comfortable sedan perfect for executive travel",
    features: ["AC", "GPS", "Premium Interior"],
    isAvailable: true
  },
  {
    name: "07 Seater Innova",
    type: "suv",
    capacity: "7",
    description: "Spacious SUV ideal for small groups",
    features: ["AC", "GPS", "Comfortable Seating"],
    isAvailable: true
  },
  // Add more vehicles...
])
```

## Step 7: Verify Deployment

1. **Frontend:**
   - Visit your Vercel URL
   - Test all pages
   - Submit a test enquiry form

2. **Backend:**
   - Test API health: `GET https://your-backend-url/api/health`
   - Test vehicle listing: `GET https://your-backend-url/api/vehicles`
   - Test admin login: `POST https://your-backend-url/api/admin/login`

3. **Admin Dashboard:**
   - Log in at `/admin/login`
   - Verify you can see leads
   - Test lead status updates

## Troubleshooting

### Backend Issues

- **MongoDB Connection Error:** Check your connection string and IP whitelist
- **CORS Error:** Ensure frontend URL is allowed in backend CORS settings
- **Port Error:** Render/Railway auto-assigns ports, use `process.env.PORT`

### Frontend Issues

- **API Not Working:** Check `VITE_API_URL` environment variable
- **Build Errors:** Check Node.js version compatibility
- **Routing Issues:** Ensure `vercel.json` is configured correctly

## Security Checklist

- [ ] Changed default admin credentials
- [ ] Set strong JWT_SECRET
- [ ] MongoDB connection string is secure
- [ ] CORS is properly configured
- [ ] Environment variables are set in hosting platform
- [ ] HTTPS is enabled (automatic on Vercel/Render)

## Monitoring

- Set up error tracking (e.g., Sentry)
- Monitor API response times
- Set up MongoDB monitoring
- Configure uptime monitoring

## Support

For issues or questions, refer to the main README.md file.

