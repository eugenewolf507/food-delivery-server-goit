const url = require("url");
const services = {};

services.GETProductID = parsedUrl => {
  const TempSplitArrayPath = parsedUrl.path.split("/");
  const ProductID = Number(TempSplitArrayPath[TempSplitArrayPath.length - 1]);
  return ProductID;
};

services.filterProductsByID = (productsArray, querryId) => {
  return productsArray.find(product => product.id === querryId);
};
module.exports = services;
