const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const { productRouter, apiRouter } = require('./routes/productRoutes');
const connectDB = require('./config/db');
const { connect } = require('http2');

const app = express();
//Load env vars
dotenv.config();
//Connect to database
connectDB();
//Routes

//View engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

//Mount API routes
//app.use('/api/products', apiRouter);

//Mount web frontend routers
app.use('/products', productRouter);

//Home route
app.get('/', (req, res) => {
  res.render('index.ejs');
});

//Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
