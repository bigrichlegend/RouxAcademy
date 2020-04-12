//Require the express library
const express = require("express");

//Most of the express functionality is stored in the express function express()
//so we create an instance of the function and assign this to a const
//since it will not be changing

const app = express();

//This is a file and not a library so use path relative to current file
const dataFile = require("./data/data.json");

//Use the 'set' verb to set the port number for the server we need this for the server
app.set("port", process.env.PORT || 3000);

//Use one of the many "verbs" available. So use the "get" verb to perform routing.
//When '/' is pressed the function runs

app.get("/", function (req, res) {
  res.send(`<h2>Welcome to Roux Academy Meetups</h2>`);
});

app.get("/speakers", function (req, res) {
  //When '/' is pressed a resPONSE is 'sent'
  var info = "";

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

app.get("/speakers/:speakerid", function (req, res) {
  //dataFile is a JSON object so use dot(.) notation to access properties
  //speakers is an array of objects so use function foreach defined on array
  var speaker = dataFile.speakers[req.params.speakerid];

  res.send(`
    <h2>${speaker.title}</h2>
    <h3>${speaker.name}</h3>
    <p>${speaker.summary}</p>
    `);
});

//We need a server to process and output our response so we create one using the
//'listen' verb.Use the 'get' verb to get PORT number
const server = app.listen(app.get("port"), function () {
  console.log("Go to localhost:" + app.get("port"));
});
