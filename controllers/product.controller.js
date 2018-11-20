const Product = require("../models/product.model");

function all(req, res) {
  
  Product.find({},(err, products)=>{
    if(err){
      console.log(err);
      
    }else{
      res.json(products)
    }
  })
}
function get(req, res) {
  Product.findById({_id: req.params.id}, function(err, product){
    if(err) {
      console.log(err);
      
    }else {
      res.json(product)
    }
  })
}
 function create(req, res) {
  let product = new Product(
      {
          name: req.body.name,
          price: req.body.price
      }
  );

  product.save(function (err) {
      if (err) {
          console.log(
           err)
      }
      res.send('Product Created successfully')
  })
};

function del(req, res) {
  Product.findByIdAndRemove(req.params.id,(err)=>{
    if(err){
      console.log(err);
      
    }else{
      res.send("Deleted successfully!")
    }
  });
  
}
module.exports = {
  create:create,
  get: get,
  del: del,
  all: all
}