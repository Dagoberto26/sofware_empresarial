var express = requier('express');
var router = express.router();
var passport = require('passport');
var LocalStrategy = require('passport-local');

router.get('/', function(reg,res,next){
    res.render('login');
})



router.post('/registrar', function(reg,res,next){
    reguser(reg.body)
    .then(() =>{
        res.redirect('/login')
    })
    .catch()
    .finally()
})


async function reguser(datos){
    await client.connect()
    const db = client.db(dbName);
    const collection = db.collection('usuarios')
    await collection.insertOne(
        {
            usuario: datos.usuario,
            password: datos.password
        }
    )
}

passport.use(new LocalStrategy(
    async function(username, password, done) {
        const db = client.db(dbName);
        const collection = db.collection('usuarios')
        await collection.insertOne(
    collection.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (user.Password!==password) { return done(null, false); }
        return done(null, user);
      })
    )
    }
  ));

  
/*
router.post('/signin', function(reg,res,next)('signin', {
    successRedirect: '/',
    failureRedirect: '/signin'
  }))
 */ 


  passport.serializeUser(function(user, done) {
    done(null, user.usuario);
  })
 
