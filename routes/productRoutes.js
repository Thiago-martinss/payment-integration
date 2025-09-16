const express = require('express');
const { showCreateForm } = require('../controllers/productController');
const productRouter = express.Router();

//Web frontend routes
productRouter.get("/new", showCreateForm);



module.exports = { productRouter };
