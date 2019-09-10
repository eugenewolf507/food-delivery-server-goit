const fs = require("fs");
const path = require("path");
const getJsonStatus = require("./productsJsonStatus");
const { filterProductsByID } = require("../../utils/byID");

//++++++++ PRODUCTS +++++++++++

const products2Id = (request, response) => {
  const filePath = path.join(__dirname, "../../", "db", "all-products.json");

  //++++++++ readFile +++++++++++
  fs.readFile(filePath, function(err, data) {
    if (err) {
      return console.error(err);
    }
    const productsList = JSON.parse(data);
    const Id = Number(request.params.id);
    const productsResponse = filterProductsByID(productsList, Id);

    //++++++++ response +++++++++++
    response.writeHead(200, { "Content-Type": "application/json" });
    let json = JSON.stringify({
      status: getJsonStatus(productsResponse),
      products: productsResponse
    });
    response.end(json);
  });
};

module.exports = products2Id;
