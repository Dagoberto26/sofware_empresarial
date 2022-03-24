var express = require('express');
var router = express.Router();
var {client, dbName} = require('../db/mongo')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  mostrar()
  .then((data)=>{
    res.render('index',{datos: data});
  })
  .catch((err)=>{
    console.log(err)
  })
});

async  function  main ( )  { 
  // Usa el método connect para conectarte al servidor 
  await client.conectar ( ) ; 
  const  db  =  cliente.db ( dbName) ; 
  colección.constante  = db.colección ( 'coleccion' ) ;  
  return result;
}

router.post('insert',function(req, res, next){
  insertarDatos(req.body)
  .them(()=>{
    res.redirect('/')
  })
});

async function insertarDatos(datos){
  await client.connect();
  const db = cliente(dbName);
  const collection = db.collection('coleccion');
  await collection.insertOne(
    {
      nombre: datos.nombre,
      edad: datos.edad,
      genero: datos.genero
    }
  )
}

module.exports = router;
