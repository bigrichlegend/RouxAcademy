const express = require("express");

const app = express();
const dataFile = require("./data/data.json");

app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
  res.send("<h2>Roux Academy Meetups</h2>");
});

const server = app.listen(app.get("port"), function () {
  console.log("Go to localhost:" + app.get("port"));
});
