const fs = require("fs");
const path = require("path");

const products = (request, response) => {
  const filePath = path.join(__dirname, "../../", "db", "all-products.json");

  // response.writeHead(200, {
  //   "Content-Type": "application/json"
  // });

  const testId = 19112834;
  fs.readFile(filePath, function(err, data) {
    if (err) {
      return console.error(err);
    }
    const initialData = JSON.parse(data);
    const filteredData = initialData.filter(user => user.id === testId);
    // console.log("Asynchronous read ==============: " + initialData);
    response.writeHead(200, { "Content-Type": "application/json" });
    let json = JSON.stringify({
      status: "success",
      products: filteredData
    });
    response.end(json);
  });

  // const readStream = fs.createReadStream(filePath);
  // readStream.pipe(response);
};

module.exports = products;
