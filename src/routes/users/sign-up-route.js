const fs = require("fs");
const path = require("path");

const signUpRoute = (request, response) => {
  if (request.method === "POST") {
    let body = "";

    request.on("data", function(data) {
      body = body + data;
    });

    request.on("end", function() {
      const post = JSON.parse(body);
      const userFileName = post.username + ".json";
      const userDbPathName = path.join(
        __dirname,
        "../../",
        "db",
        "users",
        userFileName
      );

      fs.writeFile(userDbPathName, JSON.stringify(post), function(err) {
        if (err) throw err;
      });
      response.writeHead(200, { "Content-Type": "application/json" });
      let json = JSON.stringify({
        status: "success",
        user: post
      });
      response.end(json);
    });
  }
};

module.exports = signUpRoute;
