# Quick Start Guide - Localhost

## 🚀 Servers Running

Both servers should now be starting:

- **Backend:** http://localhost:5000
- **Frontend:** http://localhost:3000

## ⚠️ MongoDB Setup Required

The backend requires MongoDB to be running. You have two options:

### Option 1: Local MongoDB (Recommended for Development)

1. **Install MongoDB Community Edition:**
   - Download from: https://www.mongodb.com/try/download/community
   - Install and start MongoDB service
   - MongoDB will run on `mongodb://localhost:27017`

2. **Or use MongoDB as a service:**
   ```bash
   # Windows (if installed as service, it should auto-start)
   # Check if running: net start MongoDB
   ```

### Option 2: MongoDB Atlas (Cloud - Free Tier)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster (free tier available)
4. Get your connection string
5. Update `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mn-travels
   ```

## 📝 Environment Files

If the `.env` files don't exist, create them:

### Backend `.env` (backend/.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mn-travels
JWT_SECRET=mn-travels-super-secret-jwt-key-change-in-production
NODE_ENV=development
```

### Frontend `.env` (frontend/.env)
```
VITE_API_URL=http://localhost:5000/api
```

## ✅ Verify Everything is Working

1. **Backend Health Check:**
   - Open: http://localhost:5000/api/health
   - Should show: `{"status":"OK","message":"MN Travels API is running"}`

2. **Frontend:**
   - Open: http://localhost:3000
   - You should see the MN Travels homepage

3. **Admin Login:**
   - Go to: http://localhost:3000/admin/login
   - Username: `admin`
   - Password: `admin123`

## 🛠️ Troubleshooting

### Backend not starting?
- Check if MongoDB is running
- Check if port 5000 is available
- Check backend console for errors

### Frontend not starting?
- Check if port 3000 is available
- Check frontend console for errors
- Make sure backend is running first

### MongoDB Connection Error?
- Verify MongoDB is installed and running
- Check the connection string in `.env`
- For local MongoDB, ensure service is started

### CORS Errors?
- Backend CORS is configured to allow localhost:3000
- If using a different port, update `backend/server.js`

## 📱 Access Points

- **Homepage:** http://localhost:3000
- **Services:** http://localhost:3000/services
- **Fleet:** http://localhost:3000/fleet
- **About:** http://localhost:3000/about
- **Contact:** http://localhost:3000/contact
- **Admin Login:** http://localhost:3000/admin/login
- **Admin Dashboard:** http://localhost:3000/admin/dashboard

## 🎯 Next Steps

1. Submit a test enquiry from the Contact page
2. Log in to admin dashboard to view leads
3. Test all pages and features
4. Customize content, colors, and branding as needed

---

**Note:** If MongoDB is not running, the backend will show connection errors, but the frontend will still work with fallback vehicle data.

