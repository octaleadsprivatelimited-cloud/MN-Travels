# MN Travels Backend API

Backend API for MN Travels corporate transportation services.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB connection string and JWT secret.

4. Start the server:
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

## Default Admin Credentials

- Username: `admin`
- Password: `admin123`

**⚠️ IMPORTANT: Change these credentials in production!**

## API Endpoints

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

## Authentication

Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-token>
```

## Deployment

For deployment on Render or Railway:

1. Set environment variables in your hosting platform
2. Update `MONGODB_URI` to your production MongoDB connection string
3. Set a strong `JWT_SECRET`
4. Deploy!

