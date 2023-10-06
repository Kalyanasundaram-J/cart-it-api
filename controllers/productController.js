const jsonHandle = require("../utils/jsonHandler");
const Product = require("../models/product");
const productJsonPath = "./JSON_DB/products.json";

/**
 * Handle displaying products
 * @param {object} req request from client
 * @param {object*} res response to client
 */
exports.handleGetProducts = async function (req,res) {
    try {
        const productName = req.query.name ? req.query.name.toLowerCase() : "";
        let data = await jsonHandle.getDataById(productJsonPath)
        if (productName) {
            const filteredData = {}
            for (const key in data) {

                // Filter the objects by name.
                if (data[key].name.toLowerCase().includes(productName)) {
                    filteredData[key] = data[key];
                }
            }
            data = filteredData;
        }
        res.status(200).json(data)
    }
    catch(e) {
        console.log(e)
        res.status(400).json({'message':"Unable to process the request"});
    }
}

/**
 * Create New Product in product JSON file
 * @param {object} req Request from client
 * @param {object} res Response to client
 */
exports.handleCreateProduct = async function (req,res) {
    try {
        const {name,price,image} = req.body;
        const prod = Product;
        prod.name = name;
        prod.price = price;
        prod.image = image;
        prod.id = await jsonHandle.appendData(productJsonPath,prod);
        res.status(201).json({'product_Id':prod.id});
    }
    catch(e) {
        console.log(e);
        res.status(400).json({'message':"Unable to process the request"});
    }
}