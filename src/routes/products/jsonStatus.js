const url = require("url");
const services = {};

getJsonStatus = responseArray => {
  if (responseArray.length) {
    return "success";
  } else {
    return "no products";
  }
};

module.exports = getJsonStatus;
