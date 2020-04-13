const express = require("express");
const router = express.Router();

router.get("/speakers/:speakerid", function (req, res) {
  var dataFile = req.app.get("appData");
  //dataFile is a JSON object so use dot(.) notation to access properties
  //speakers is an array of objects so use function foreach defined on array
  var speaker = dataFile.speakers[req.params.speakerid];
  //speaker is an object. access using dot(.) notation
  res.send(`
    <h2>${speaker.title}</h2>
    <h3>with ${speaker.name}</h3>
    <p>${speaker.summary}</p>
    `);
});
module.exports = router;
