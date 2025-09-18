const express = require("express");
const {
  showCheckout,
  processCheckout,
  paymentSuccess,

} = require("../controllers/paymentController");
const paymentRouter = express.Router();

//Web frontend routes

paymentRouter.post("/checkout/:productId", processCheckout);
paymentRouter.get("/success", paymentSuccess);
paymentRouter.get("/checkout/:productId", showCheckout);

module.exports = { paymentRouter };
