const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const Product = require("../models/Product");

// @desc    Show checkout page for a product
// @route   GET /checkout/:productId (frontend only)
// @access  Public
exports.showCheckout = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.render("checkout", {
      product,
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
    });
  } catch (error) {
    res.status(500).render("error", {
      message: "Error Loading Checkout",
    });
  }
};

