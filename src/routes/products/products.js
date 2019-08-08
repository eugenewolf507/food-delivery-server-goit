const fs = require("fs");
const path = require("path");

const products = (request, response) => {
  const filePath = path.join(__dirname, "../../", "db", "all-products.json");
  const image = fs.statSync(filePath);

  response.writeHead(200, {
    "Content-Type": "application/json",
    "Content-Length": image.size
  });

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
};

module.exports = products;
