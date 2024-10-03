import express from 'express'
import mongoose from 'mongoose';
import cors from'cors'
import connectDB from  './config/db'
import authRoutes from './routes/authRoutes'




// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
