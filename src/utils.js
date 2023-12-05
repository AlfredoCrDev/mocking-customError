const {faker} = require("@faker-js/faker")

faker.location="es"

const generateProducts = () => {
  let numOfProducts = 100;
  let products = [];

  for (let i = 0; i < numOfProducts; i++) {
    products.push({
      id: faker.database.mongodbObjectId(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      stock: faker.number.int(100),
      category: faker.commerce.product(),
      code: faker.finance.bic(),
      status: faker.datatype.boolean(),
      image: faker.image.avatar() 
    });
  }

  return products;
};

module.exports = {
  generateProducts,
};