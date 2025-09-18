const dotenv = require("dotenv");
dotenv.config();
const Product = require("../models/Product");


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


exports.showCreateForm = (req, res) => {
  res.render("products/create");
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;
    //Create product in stripe
    const stripeProduct = await stripe.products.create({
      name,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    });
    //Create price in Stripe
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round(price * 100),
      currency: "usd",
    });
    //Create a product in database
    const product = await Product.create({
      name,
      price,
      description,
      imageUrl,
      stripeProductId: stripeProduct.id,
      stripePriceId: stripePrice.id,
    });
    console.log(product);

    //Redirect  for frontend
    res.render("products/index");
  } catch (error) {
    res.status(500).render("error", {
      message: "Error creating product",
    });
  }
};