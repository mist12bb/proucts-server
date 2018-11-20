const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let dev_db_url = 'mongodb://nana12:A98A76B0@ds263639.mlab.com:63639/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const product = require("./routes/product.route");


const app = express();



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true  }))
app.use("/products", product);

let port = 1234;

app.listen(port=port,(err)=>{
  if(err) {
    console.log(err);
    
  }else{
    console.log(
     "http://localhost:"+port
    )
  }
})