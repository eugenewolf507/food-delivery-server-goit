const url = require("url");
const services = {};

services.GETCategoryQueryArray = parsedUrl => {
  if (parsedUrl.query !== null) {
    const lastIndex = parsedUrl.query.lastIndexOf("=");
    const ProductsQueryArray = parsedUrl.query
      .replace(/%27/g, "")
      .replace(/%22/g, "")
      .replace(/%20/g, "")
      .slice(lastIndex + 1)
      .split(",");
    return ProductsQueryArray;
  }
};

services.filterProductsByCategories = (productsArray, querryArray) => {
  const TempAccArray = [];
  querryArray.forEach(querry => {
    productsArray.forEach(product => {
      if (product.categories.includes(querry)) {
        TempAccArray.push(product);
      }
    });
  });
  return TempAccArray;
};

module.exports = services;
