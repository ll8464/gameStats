const express = require("express");
const app = express();
const request = require("request");
const port = 3001;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Security-Policy", "default-src *");
  next();
});

app.set("port", 3001);

app.get("/news", function (req, res) {
  let qParams = [];
  for (let p in req.query) {
    qParams.push({ name: p, value: req.query[p] });
  }

  const url =
    "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=" +
    qParams[0].name +
    "&count=3&maxlength=300&format=json";
  request(url, function (err, response, body) {
    if (!err && response.statusCode < 400) {
      console.log(body);
      res.send(body);
    }
  });

  res.send("Hello World!");
});

// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}`);
// });

app.listen(app.get("port"), function () {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});
