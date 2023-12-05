const express = require("express")
const router = express.Router()
const cartManager = require("../controllers/cartCrontroller")
const productManager = require("../controllers/productController.js")


router.post('/addToCart', (req, res) => {
  const { title, price } = req.body;
  const product = productManager.createProduct(title, parseFloat(price));
  try {
    const addproduct = cartManager.addToCart(product);
    res.json({status: "Producto Agregado al carrito", addproduct});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router