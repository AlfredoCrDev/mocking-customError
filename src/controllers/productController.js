const errorDictionary = require("../services/errors/enums")

const createProduct = (title, price) => {
  if (!title || typeof title !== "string") {
    throw new Error(errorDictionary.PRODUCT_INVALID_TITLE);
  }

  if (!price || typeof price !== "number" || price <= 0) {
    throw new Error(errorDictionary.PRODUCT_INVALID_PRICE);
  }

  const product = {
    title,
    price,
  };

  return product;
};

module.exports = {
  createProduct
}