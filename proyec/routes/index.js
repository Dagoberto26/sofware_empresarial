var express = require('express');
var router = express.Router();
var {client, dbName} = require('../db/mongo')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  mostrar()
  .them((data)=>{
    res.render
  })
});


router.post('/insertarDato',function(req, res, next){
  insertarDatos(req.body)
  res.redirect('/')
})

async function insertarDatos(data) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('coleccioin');


  collection.insertOne(
    {
      nombre :data.name,
      edad : data.edad

    }
  )
}

module.exports = router;