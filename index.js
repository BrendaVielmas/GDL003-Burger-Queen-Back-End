

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://karina2004liz:ex300172004@firstdatabase-t9rak.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/

/*


const express = require('express');



 const app = express();

app.listen(3001, function() {
    console.log('listening on 3001')
  })

  app.get('/products', (req, res) => {
    res.send(gato)
  })

  app.get('/', (req, res) => {
    res.send("Utilice /products para checar existencias")
  })


  var gato = {

    michi :{
        name : "michi",
        age : "5years"  

    },
    michi2 :{
        name : "michi",
        age : "5years"  

    },

    michi3 :{
        name : "michi",
        age : "5years"  

    }

    ,    michi4 :{
        name : "michi",
        age : "5years"  

    },
 

  }


*/

const port = process.env.PORT || 3000

var cors = require("cors");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var mongose = require("mongoose");



app.use(cors());
//app.use(express.json());


app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
});

app.get("/get", (req, res, next) => {
    res.json({
        "version": process.env.VERSION
    });
});

app.post('/post', function(request, response) {
    response.send(request.body);
});


app.get("/products", (req,res)=>{
  res.send(products)
})

var products = {

 products: [

    {name : "coffee",
    price: 15,
    id: 1,
    },
    {
    name: "tea",
    price: 10,
    id: 2,
    },
    {name: "chocolate",
    price: 20,
    id: 3

    },
    {name: "lechera",
    price: 20,
    id: 4

    }
    ,
    {name: "Galleta",
    price: 20,
    id: 5

    }
  ]
}


