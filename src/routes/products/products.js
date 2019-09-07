const fs = require("fs");
const path = require("path");
const url = require("url");

// required get and filter functions
const { GETProductID, filterProductsByID } = require("./byID");
const { GETIDSQueryArray, filterProductsByIDS } = require("./byIDS");
const {
  GETCategoryQueryArray,
  filterProductsByCategories
} = require("./byCategories");
const getJsonStatus = require("./jsonStatus");

//++++++++ PRODUCTS +++++++++++
const products = (request, response) => {
  const filePath = path.join(__dirname, "../../", "db", "all-products.json");
  let parsedUrl = url.parse(request.url);

  //++++++++ readFile +++++++++++
  fs.readFile(filePath, function(err, data) {
    if (err) {
      return console.error(err);
    }
    const productsList = JSON.parse(data);
    let productsResponse = [];

    //++++++++ byID +++++++++++
    if (parsedUrl.query === null) {
      const querryID = GETProductID(parsedUrl);
      productsResponse = filterProductsByID(productsList, querryID);
    }

    //++++++++ byIDs +++++++++++
    if (parsedUrl.query !== null && parsedUrl.query.includes("ids")) {
      const querryIDSArray = GETIDSQueryArray(parsedUrl);
      productsResponse = filterProductsByIDS(productsList, querryIDSArray);
    }

    //++++++++ byCategories +++++++++++
    if (parsedUrl.query !== null && parsedUrl.query.includes("category")) {
      const querryCategoryArray = GETCategoryQueryArray(parsedUrl);
      productsResponse = filterProductsByCategories(
        productsList,
        querryCategoryArray
      );
    }

    //++++++++ all +++++++++++
    if (parsedUrl.path === "/products/") {
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
