const express = require("express");
const {handleCreateProduct, handleGetProducts} = require("../controllers/productController");
const router = express.Router();


//GET
router.get("/",handleGetProducts)

// POST
router.post("/add",handleCreateProduct);

module.exports = router;