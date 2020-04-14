//Require the express library
const express = require("express");
const reload = require("reload");
var http = require("http");
//Most of the express functionality is stored in the express function express()
//so we create an instance of the function and assign this to a const
//since it will not be changing

const app = express();

//This is a file and not a library so use path relative to current file. We pass this down to the
//speakers route using app.set
const dataFile = require("./data/data.json");

//Use the 'set' verb to set the port number for the server we need this for the server
app.set("port", process.env.PORT || 3000);
app.set("appData", dataFile);
app.set("view engine", "ejs");
app.set("views", "app/views");

app.locals.siteTitle = "Roux Meetups";
//Use static to make available to our application any folder which have assets
app.use(express.static("app/public"));

//We want to use index.js file so use verb "use" to get it. When you are in a Folder
//relative paths are accessed using ./
app.use(require("./routes/index"));
app.use(require("./routes/speakers"));
//app.use(require("./routes/speakers/:speakerid"));
app.use(require("./routes/speaker"));

//We need a server to process and output our response so we create one using the
//'listen' verb.Use the 'get' verb to get PORT number
var server = http.createServer(app);

// Reload code here
reload(app)
  .then(function (reloadReturned) {
    server.listen(app.get("port"), function () {
      console.log("Web server listening on port " + app.get("port"));
    });
  })
  .catch(function (err) {
    console.error(
      "Reload could not start, could not start server/sample app",
      err
    );
  });
