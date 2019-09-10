const fs = require("fs");
const path = require("path");
const url = require("url");

// required get and filter functions
const { GETIDSQueryArray, filterProductsByIDS } = require("./byIDS");
const {
  GETCategoryQueryArray,
  filterProductsByCategories
} = require("./byCategories");
const getJsonStatus = require("./productsJsonStatus");

//++++++++ PRODUCTS +++++++++++

const products = (request, response) => {
  const filePath = path.join(__dirname, "../../", "db", "all-products.json");

  //++++++++ readFile +++++++++++
  fs.readFile(filePath, function(err, data) {
    if (err) {
      return console.error(err);
    }
    const productsList = JSON.parse(data);
    let productsResponse = [];

    //++++++++ byIDs +++++++++++
    if (request.query !== null && request.query.hasOwnProperty("ids")) {
      const querryIDSArray = GETIDSQueryArray(request.query.ids);
      productsResponse = filterProductsByIDS(productsList, querryIDSArray);
    }

    //++++++++ byCategories +++++++++++
    if (request.query !== null && request.query.hasOwnProperty("category")) {
      const querryCategoryArray = GETCategoryQueryArray(request.query.category);
      productsResponse = filterProductsByCategories(
        productsList,
        querryCategoryArray
      );
    }

    //++++++++ all +++++++++++
    if (
      request.path.includes("/products") &&
      Object.entries(request.query).length === 0
    ) {
      productsResponse = productsList;
    }

    //++++++++ response +++++++++++
    response.writeHead(200, { "Content-Type": "application/json" });
    let json = JSON.stringify({
      status: getJsonStatus(productsResponse),
      products: productsResponse
    });
    response.end(json);
  });
};

module.exports = products;
