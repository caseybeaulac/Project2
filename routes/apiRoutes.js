var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), function (req, res) {

    console.log("loginnn")
    res.json(req.user.id)
    console.log(req.user.id);
    //res.redirect("/home") //look into doing res.json and send back user ID, and then do redirect on the front end 
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      console.log(res);

      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/post", function (req, res) {
    console.log(req.body);
    // if (!userID) {
    //   alert("Please log in before posting a phone");
    // }
    // console.log(db.Phone)
    db.Phone.create({
      brand: req.body.brand,
      model: req.body.model,
      phone_condition: req.body.phone_condition,
      imei: req.body.imei,
      userID: parseInt(req.body.user)

    })
      .then(function () {
        console.log("Worked")
        res.redirect(307);

        // res.alert(
        //   "You succesfully posted your " + req.body.brand + " " + req.body.model
        // );
      })
      .catch(function (err) {
        console.log(err)
        res.status(401).json(err);
      });
  });

  app.get("/api/allPhones", function (req, res) {

    console.log("all phones")
    db.Phone.findAll({

    })
      .then(function (phoneData) {
        res.json(phoneData)

      })

  })

};
