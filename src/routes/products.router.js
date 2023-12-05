const express = require("express")
const router = express.Router()
const {generateProducts} = require("../utils.js")
const productManager = require("../controllers/productController.js")
const productsData = require("../data/productsData.js")



router.get("/mockingproducts", async(req, res) =>{
  let products = []
  for (let i=0; i< 100; i++){
    products.push(generateProducts())
  }
  res.send({status: "success", payload: products})
})

router.post('/createProduct/', (req, res) => {
  const { title, price } = req.body;

  try {
    const newProduct = productManager.createProduct(title, parseFloat(price));
    productsData.push(newProduct)
    res.json({status: "Producto creado con éxito", newProduct});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router