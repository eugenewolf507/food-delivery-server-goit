const bodyParser = require("body-parser");
const http = require("http");
const url = require("url");
const app = require("./modules/app");
const morgan = require("morgan");
const router = require("./routes/router");
const logger = morgan("combined");

const errorHandler = (req, res, next) => {
  res.status(500).send("No such page");
  next();
};

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use("/", router)
    .use(errorHandler);

  app.listen(port);

  console.log("Server was started at port: " + port);
};

module.exports = startServer;
