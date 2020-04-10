const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h2>Roux Academy Meetups</h2>");
});

const server = app.listen(3000, function () {
  console.log("Go to localhost:3000");
});
