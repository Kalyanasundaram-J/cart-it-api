const express = require("express");
require("dotenv").config(); // Load environment variables from .env file
const bodyParser = require("body-parser");
const path = require("path");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const purchaseRouter = require("./routers/purchaseRouter");
const cors = require('cors');
// const { checkForToken } = require("./middlewares/auth")

const app = express(); // Setup express app


// Configeration
//Middleware
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
});
app.use(express.static(path.resolve("./public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Register Routes
app.use("/user", userRouter);
app.use("/products", productRouter);
app.use("/purchases", purchaseRouter);
app.use("/",(req,res)=>{res.send("There is NO API call in this path!")});

// Listener
app.listen(3000, () => {
  console.log("\x1b[36m Server is running at PORT:3000 \x1b[0m");
});
