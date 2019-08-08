const mainRoute = require("./main/main");
const products = require("./products/products");
const motocycleRoute = require("./motocycle/motocycle");
const signUpRoute = require("./users/sign-up-route");

const router = {
  "/products": products,
  "/signup": signUpRoute,
  "/motocycle": motocycleRoute,
  default: mainRoute
};

module.exports = router;
