var express = require('express');
var router = express.Router();
const userModel = require("./users");
const passport = require("passport");
const localStrategy = require("passport-local"); 
passport.use(new localStrategy (userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/profile',isLoggedIn, function(req, res){
  res.render('profile');
});

router.post('/register', function (req, res) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userdata, req.body.password)
  .then(function (registereduser) {
    passport.authenticate("local") (req, res, function () { 
      res.redirect('/profile');
    })
  })
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function(req, res){})


router.get('/Logout', function(req, res, next) { 
  req.logout(function(err) {
    if (err) { return next(err); } 
    res.redirect('/');
  }); 
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
  return next();
  }
  res.redirect("/");
}

// router.get('/failed', function(req, res) {
//   req.flash("age", 12);
//   req.flash("name", "Rasendra");
//   res.send("bangaya");
// });

// router.get('/checkkaro', function(req, res) {
//   console.log(req.flash("age"));
//   console.log(req.flash("name"));
//   res.send("check krlo terminal par");
// });

// router.get("/create", async function(req, res) {
//   let userdata = await userModel.create({
//     username: "Rk",
//     nickname: "RRRRR",
//     description: "superstar",
//     categories:  ['watch anime','perfect']
//   });
//   res.send(userdata);
// });


// //case in-sensitive search:-
// router.get("/find", async function(req, res){
//   var regex = new RegExp("^Harsh$", 'i');
//   let user = await userModel.find({username: regex});
//   res.send(user);
// })

module.exports = router;
