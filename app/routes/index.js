//We are going to use the route function of "express" so require it
const express = require("express");

const router = express.Router();

//Use one of the many "verbs" available. So use the "get" verb to perform routing.
//When '/' is pressed the function runs
/*
app.get("/", function (req, res) {
    res.send(`<h2>Welcome to Roux Academy Meetups</h2>`);
});
*/

//Use the get() on the router instead now
router.get("/", function (req, res) {
  res.send(`<h2>Welcome to Roux Academy Meetups</h2>`);
});

//This "module" is from node and we must export
module.exports = router;
