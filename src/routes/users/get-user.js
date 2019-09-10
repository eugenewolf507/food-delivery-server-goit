const fs = require("fs");
const path = require("path");
const usersJsonStatus = require("./usersJsonStatus");
const { filterProductsByID } = require("../../utils/byID");

//++++++++ PRODUCTS +++++++++++

const getUserByID = (request, response) => {
  const filePath = path.join(__dirname, "../../", "db/users", "all-user.json");

  console.log("GET-USER");

  //++++++++ readFile +++++++++++
  fs.readFile(filePath, function(err, data) {
    if (err) {
      return console.error(err);
    }
    const usersList = JSON.parse(data);
    const userId = Number(request.params.userId);
    const usersResponse = filterProductsByID(usersList, userId);
    console.log(userId);

    //++++++++ response +++++++++++
    response.writeHead(200, { "Content-Type": "application/json" });
    let json = JSON.stringify(usersJsonStatus(usersResponse));
    response.end(json);
  });
};

module.exports = getUserByID;
