const express = require("express");
const apiRoutes = express.Router();
const mainRoute = require("./main/main");
const products = require("./products/products");
const productsId = require("./products/productsId");
const getUser = require("./users/get-user");
const createUser = require("./users/create-user");
const createOrder = require("./orders/create-order");

apiRoutes
  .get("/", mainRoute)
  .get("/products", products)
  .get("/products/:id", productsId)
  .get("/users/:userId", getUser)
  .get("*", mainRoute)

  .post("/users", createUser)
  .post("/orders", createOrder);

module.exports = apiRoutes;
