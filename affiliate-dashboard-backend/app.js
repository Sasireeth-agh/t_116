const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const commissionRoutes = require('./routes/commissionRoutes');
const announcementRoutes = require('./routes/announcementRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:3004', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE', // Specify allowed methods
    allowedHeaders: 'Content-Type,Authorization'
  }));
  
// Connect to the database
connectDB();

// Middleware
app.use(express.json());


// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/commissions', commissionRoutes);
app.use('/api/announcements', announcementRoutes);

module.exports = app;