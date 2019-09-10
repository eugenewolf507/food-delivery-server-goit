const services = {};

//Make Array with cattegory names from query
services.GETCategoryQueryArray = query => {
  if (query !== null) {
    console.log("query !== null");
    const ProductsQueryArray = query
      .replace(/\s/g, "")
      .replace(/"/g, "")
      .replace(/'/g, "")
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
