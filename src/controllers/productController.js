const createError = require('../services/errors/errorHandler');

const createProduct = (title, price) => {
  try {
    if (!title || typeof title !== 'string') {
      throw createError('PRODUCT_INVALID_TITLE');
    }

    if (!price || typeof price !== 'number' || price <= 0) {
      throw createError('PRODUCT_INVALID_PRICE');
    }

    const product = {
      title,
      price,
    };

    return product;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProduct,
};
