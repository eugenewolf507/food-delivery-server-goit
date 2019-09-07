const url = require("url");
const services = {};

services.GETProductID = parsedUrl => {
  // console.log("*** parsedUrl.query === null");
  const TempSplitArrayPath = parsedUrl.path.split("/");
  const ProductID = Number(TempSplitArrayPath[TempSplitArrayPath.length - 1]);
  // console.log(`ProductID: ${ProductID}`);
  return ProductID;
};

services.filterProductsByID = (productsArray, querryId) => {
  return productsArray.filter(product => product.id === querryId);
};
module.exports = services;
