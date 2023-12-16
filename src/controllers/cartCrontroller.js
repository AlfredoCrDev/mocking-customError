const { createError } = require('../services/errors/errorHandler');
const cart = require('../data/productsData');

// Función para agregar un producto al carrito
const addToCart = (product) => {
  try {
    if (!product || typeof product !== 'object') {
      throw createError('CART_INVALID_PRODUCT');
    }

    cart.push(product);

    return cart;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addToCart,
};
