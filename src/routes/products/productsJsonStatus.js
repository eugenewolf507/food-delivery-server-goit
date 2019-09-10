getJsonStatus = responseArray => {
  if (responseArray.length) {
    return "success";
  } else {
    return "no products";
  }
};

module.exports = getJsonStatus;
