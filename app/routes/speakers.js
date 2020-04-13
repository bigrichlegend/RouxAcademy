const express = require("express");
const router = express.Router();

router.get("/speakers", function (req, res) {
  //When '/' is pressed a resPONSE is 'sent'
  var info = "";
  var dataFile = req.app.get("appData");

  //dataFile is a JSON object so use dot(.) notation to access properties
  //speakers is an array of objects so use function foreach defined on array
  dataFile.speakers.forEach(function (item) {
    //The object for this array is passed in as the 'item' and we operate on it
    info += `
    <li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    </l1>
    `;
  });

  res.send(`
    <h2>Roux Academy Meetups</h2>
    ${info}
    `);
});

module.exports = router;
