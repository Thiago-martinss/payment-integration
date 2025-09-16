const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");


const app = express();
//Load env vars
dotenv.config();
//Connect to database
connectDB();
//Routes


//Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));