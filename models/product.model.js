const monoose = require("mongoose");

const Shcema = monoose.Schema;

const ProductShcema = new Shcema({
  name:{type:String, required:true, max: 100},
  price: {type: Number, required: true}
})

module.exports = monoose.model("Product", ProductShcema);
