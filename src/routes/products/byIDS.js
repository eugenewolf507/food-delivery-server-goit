const services = {};

services.GETIDSQueryArray = query => {
  if (query !== null) {
    console.log("query !== null");
    const IDSQueryArray = query
      .replace(/\s/g, "")
      .replace(/"/g, "")
      .replace(/'/g, "")
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
