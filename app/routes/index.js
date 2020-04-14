//We are going to use the route function of "express" so require it
const express = require("express");

const router = express.Router();

//Using "verb" get. So use the "get" verb to perform routing. When '/' is pressed the function runs
//Use the get() on the router instead now

router.get("/", function (req, res) {
  var dataFile = req.app.get("appData");
  var pagePhotos = [];

  dataFile.speakers.forEach(function (item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });
  res.render("index", {
    pageTitle: "Home",
    artwork: pagePhotos,
    pageID: "home",
  });
});

//This "module" is from node and we must export
module.exports = router;
