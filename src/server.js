const http = require("http");
const url = require("url");

const morgan = require("morgan");
const router = require("./routes/router");

const logger = morgan("combined");

const startServer = port => {
  const server = http.createServer((request, response) => {
    // Get route from the request
    let parsedUrl = url.parse(request.url);
    if (request.url.includes("/products")) parsedUrl.pathname = "/products";
    console.log(parsedUrl);
    // Get router function
    const func = router[parsedUrl.pathname] || router.default;
    logger(request, response, () => func(request, response));
  });

  server.listen(port);
};

module.exports = startServer;
