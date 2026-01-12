const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');

// 1. Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// 2. Built-in & Third-party Middleware
app.use(express.json()); // Built-i Body parsing for JSON
app.use(morgan('dev'));  // Logging requests

// 3. Custom Middleware (Example: Request Logger)
const customLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
    next(); // Pass control to the next handler
};
app.use(customLogger);

// --- RESTful API Routes ---
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);


// 4. Start Server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
