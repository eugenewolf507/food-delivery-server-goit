getJsonStatus = responseArray => {
  if (responseArray) {
    return { user: responseArray };
  } else {
    return "not found";
  }
};

module.exports = getJsonStatus;
