const express = require("express");
const { handleCreatePurchase } = require('../controllers/purchaseController');
const router = express.Router();

// POST
router.post('/place-order',handleCreatePurchase);

module.exports = router;