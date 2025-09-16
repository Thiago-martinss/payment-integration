const dotenv = require("dotenv");
dotenv.config();

exports.showCreateForm = (req, res) => {
  res.render("products/create");
};