var express = requier('express');
var router = express.router();
var passport = require('passport');
var LocalStrategy = require('passport-local');

router.get('/',function(reg,res,next){
    res.render('index');
})

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });