var db = require("../models");
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");



module.exports = function (app) {


  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/login", function (req, res) {

    // if (req.user) {
    //   res.redirect("/home");
    // }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/swap", function (req, res) {

    res.sendFile(path.join(__dirname, "../public/swap.html"));
  });

  app.get("/signup", function (req, res) {

    // if (req.user) {
    //   res.redirect("/home");
    // }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });


  app.get("/home", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
