const jsonHandle = require("../utils/jsonHandler");
const Purchase = require("../models/purchase");
const purchaseJsonPath = "./JSON_DB/purchases.json";
const productJsonPath = "./JSON_DB/products.json";

/**
 * Create New Purchase in purchase JSON file
 * @param {object} req Request from Client
 * @param {object} res Response to client
 */
exports.handleCreatePurchase = async function (req,res) {
    try{
        const {productId} = req.body;
        const product = jsonHandle.getDataById(productJsonPath,productId);
        const purchase = Purchase;
        purchase.product_detail.id = product.id;
        purchase.product_detail.name = product.name;
        purchase.product_detail.price = product.price;
        purchase.product_detail.created_date = product.created_date;
        purchase.product_detail.updated_date = product.updated_date;
        purchase.id = await jsonHandle.appendData(purchaseJsonPath,purchase)
        res.status(201).json({message:"Successfully placed the order",purchaseId:purchase.id})
    }
    catch(e){
        console.log(e)
        res.status(400).json({message:"Unable to process the request!"});
    }
}