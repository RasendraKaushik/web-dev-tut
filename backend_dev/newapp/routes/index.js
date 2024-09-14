var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
const passport = require('passport');
const upload = require('./multer');

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/alluserposts', async function(req, res, next) {
//   let user = await userModel.
//   findOne({_id:"668ececcbb1b3fd67a6cb622"})
//   .populate('posts')
//   res.send(user);
// });


// router.get('/createuser', async function(req, res, next) {
//   let createduser = await userModel.create({
//     username: "Rasendra",
//     password: "Kaushik",
//     posts: [],
//     email: "rasendra004@gmail.com",
//     fullName: "Rasendra Kaushik"
//   });

//   res.send(createduser);
// });

// router.get('/createpost',async function(req, res, next) {
//   let createdpost = await postModel.create({
//     postText: "Hello everyone,kaise ho saare",
//     user: "668ececcbb1b3fd67a6cb622" 
//   })
//   let user = await userModel.findOne({_id: "668ececcbb1b3fd67a6cb622"});
//   user.posts.push(createdpost._id);
//   await user.save();
//   res.send("done");
// });

router.get('/login', function(req, res, next) {
  // console.log(req.flash("error"));
  res.render('login', {error: req.flash('error')});
});

router.get('/feed', function(req, res, next) {
  res.render('feed');
});

router.post('/upload',isLoggedIn, upload.single('file'), async function (req, res) {
  // Access the uplaoded file details via req. file
  if(!req.file) {
    return res.status(400).send('No files were uploaded.');
  }
  // jo file upload hui hai usse save krro as a post and uska post id user ko do and post ko user id do
  const user = await userModel.findOne({username: req.session.passport.user});
  const post = await postModel.create({
    image: req.file.filename,
    imageText: req.body.filecaption,
    user: user._id
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

router.get('/profile', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  })
  .populate("posts")
  res.render('profile',{user});
});


router.post("/register", function(req, res){
  const { username, email, fullName } = req.body;
  const userData = new userModel({ username, email, fullName });

  userModel.register(userData, req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
})


router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true
}), function(req, res){
  
})


router.get("/logout", function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}

module.exports = router;
