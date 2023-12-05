const errorDictionary = require("../services/errors/enums")
const cart = require("../data/productsData")

// Función para agregar un producto al carrito
const addToCart = (product) => {
  if (!product || typeof product !== "object") {
    throw new Error(errorDictionary.CART_INVALID_PRODUCT);
  }
  
  cart.push(product)

  return cart;
};

module.exports ={
  addToCart
}