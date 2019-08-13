const fs = require("fs");
const path = require("path");

const saveUser = user => {
  // получить файл с юзером
  // найти путь папки users
  // сохранить туда файл
};

const signUpRoute = (request, response) => {
  // Взять данные что пришли

  if (request.method === "POST") {
    let body = "";

    request.on("data", function(data) {
      body = body + data;

      console.log("Incoming data!!!!");
      console.log(body);
      console.log("Incoming data!!!!");
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
      console.log(userDbPathName);
      console.log(fs.existsSync(userDbPathName));
      console.log(post);
      fs.writeFile(userDbPathName, JSON.stringify(post), function(err) {
        if (err) throw err;
        console.log("Replaced!");
      });
    });
  }

  response.writeHead(200, { "Content-Type": "application/json" });
  let json = JSON.stringify({
    status: "success",
    user: post
  });
  response.end(json);
  // Взять username с данных, сохранить в переменную

  // Сохраняем данные в <username>.json

  // Сохранить <username>.json в папку users

  // Отправляем файл в ответе с данными юзера
  // использовать response
};

module.exports = signUpRoute;
