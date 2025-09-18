const express = require('express');
const {
  showCreateForm,
  createProduct,
} = require('../controllers/productController');
const productRouter = express.Router();
const apiRouter = express.Router();
productRouter.post('/', createProduct);


//Web frontend routes
productRouter.get('/new', showCreateForm);

module.exports = { productRouter };
