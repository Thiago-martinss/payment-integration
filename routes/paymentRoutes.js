const express = require("express");
const {
  showCheckout
} = require("../controllers/paymentController");
const paymentRouter = express.Router();

//Web frontend routes


paymentRouter.get("/checkout/:productId", showCheckout);

module.exports = { paymentRouter };
