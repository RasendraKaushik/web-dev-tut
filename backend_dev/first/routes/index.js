var express = require('express');
var router = express.Router();
const userModel = require("./users");

router.get("/", function(req , res){
  res.render("index");
});

// router.get("/create", async function(req , res){
//   const createdUser = await userModel.create({
//     username: "Rasendra",
//     name: "Rashen",
//     age:21
//   });
//   res.send(createdUser);
// });


// router.get("/allusers", async function(req, res){
//   let allusers = await userModel.find();
//   res.send(allusers);
// })


// router.get("/delete",async function(req, res) {
//   let deleteuser = await userModel.findOneAndDelete({
//     username: "Rasendra"
//   });
//   res.send(deleteuser);
// });

// router.get("/", function (req , res) {
//   req.session.ban = true;
//   res.render("index");
// })

// router.get("/checkban", function(req, res){
//   console.log(req.session);
//   res.send("check kiya hai console dekho");
// })

module.exports = router;
