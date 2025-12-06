# MN Travels - Corporate Transportation Services

Full-stack web application for corporate transportation services built with React, Node.js, Express, and MongoDB.

## 🚀 Project Overview

MN Travels is a premium corporate transportation service platform that provides:
- Employee Transportation
- Airport Pickups/Drops
- Hotel Adhoc Transport
- Local & Outstation Trips
- Premium & Luxury Car Hire

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Helmet Async** - SEO

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
MN Travels/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   ├── utils/           # Utility functions
│   ├── server.js        # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── utils/       # Utility functions
│   │   └── App.jsx      # Main app component
│   └── package.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mn-travels
JWT_SECRET=your-super-secret-jwt-key-change-in-production
NODE_ENV=development
```

5. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your backend API URL:
```
VITE_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🔐 Default Admin Credentials

- **Username:** `admin`
- **Password:** `admin123`

⚠️ **IMPORTANT:** Change these credentials in production!

## 📡 API Endpoints

### Public Endpoints
- `POST /api/leads` - Submit an enquiry
- `GET /api/vehicles` - Get all vehicles
- `GET /api/vehicles/:id` - Get a single vehicle
- `POST /api/admin/login` - Admin login

### Protected Endpoints (Require JWT Token)
- `GET /api/leads` - Get all leads (Admin)
- `GET /api/leads/:id` - Get a single lead (Admin)
- `PATCH /api/leads/:id` - Update lead status (Admin)
- `POST /api/vehicles` - Create vehicle (Admin)
- `PATCH /api/vehicles/:id` - Update vehicle (Admin)
- `DELETE /api/vehicles/:id` - Delete vehicle (Admin)
- `GET /api/admin/dashboard` - Get dashboard stats (Admin)
- `GET /api/admin/me` - Get current admin info (Admin)

## 🎨 Design System

### Colors
- **Navy Blue:** `#00254d`
- **Royal Blue:** `#005bb5`
- **White:** `#ffffff`
- **Silver Gray:** `#d9d9d9`

### Typography
- **Font Family:** Inter (Google Fonts)
- Professional, elegant typography
- Clean layouts

## 📱 Pages

1. **Home** - Hero section, services, testimonials, partner logos
2. **Services** - Detailed service descriptions
3. **Fleet** - Vehicle listings (API-driven)
4. **About Us** - Mission, vision, values
5. **Contact** - Enquiry form with backend integration
6. **Admin Dashboard** - Lead management (protected)

## 🚀 Deployment

### Frontend (Vercel)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd frontend
vercel
```

3. Set environment variable in Vercel dashboard:
   - `VITE_API_URL`: Your backend API URL

### Backend (Render/Railway)

1. Connect your GitHub repository
2. Set environment variables:
   - `PORT`: 5000 (or auto-assigned)
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Strong secret key
   - `NODE_ENV`: production

3. Deploy!

## 📝 Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized meta tags
- ✅ Smooth animations with Framer Motion
- ✅ JWT authentication for admin
- ✅ Lead management system
- ✅ Vehicle listing API
- ✅ WhatsApp click-to-chat integration
- ✅ Admin dashboard for viewing leads
- ✅ Form validation
- ✅ Error handling

## 🔧 Development

### Adding New Vehicles

Use the admin API or directly insert into MongoDB:

```javascript
{
  name: "04 Seater Sedan",
  type: "sedan",
  capacity: "4",
  description: "Comfortable sedan perfect for executive travel",
  features: ["AC", "GPS", "Premium Interior"],
  isAvailable: true
}
```

### Vehicle Types
- `sedan` - Sedan cars
- `suv` - SUV vehicles
- `tempo` - Tempo Traveller
- `bus` - Buses

## 📄 License

This project is proprietary software.

## 👥 Support

For support, email info@mntravels.com or contact through the website.

---

**Built with ❤️ for corporate transportation excellence**

