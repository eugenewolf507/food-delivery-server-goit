const fs = require("fs");
const path = require("path");

const createUser = (request, response) => {
  const src = path.join(__dirname, "../../", "db/users", "all-user.json");
  const user = request.body;
  fs.readFile(src, (error, data) => {
    const prevData = JSON.parse(data);
    const newUser = { ...user, id: Date.now() };
    const users = [...prevData, newUser];
    fs.writeFile(src, JSON.stringify(users), error => {
      if (error) throw error;
    });
    response.set("Content-Type", "application/json");
    response.status(200);
    response.json({ status: "success", user: newUser });
  });
};

module.exports = createUser;
