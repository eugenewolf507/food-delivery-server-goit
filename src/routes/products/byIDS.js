const url = require("url");
const services = {};

services.GETIDSQueryArray = parsedUrl => {
  if (parsedUrl.query !== null) {
    const lastIndex = parsedUrl.query.lastIndexOf("=");
    const IDSQueryArray = parsedUrl.query
      .replace(/%27/g, "")
      .replace(/%20/g, "")
      .slice(lastIndex + 1)
      .split(",");
    return IDSQueryArray;
  }
};

services.filterProductsByIDS = (productsArray, querryArray) => {
  const TempAccArray = [];
  querryArray.forEach(querry => {
    productsArray.forEach(product => {
      if (product.id === Number(querry)) {
        TempAccArray.push(product);
      }
    });
  });
  return TempAccArray;
};

module.exports = services;
