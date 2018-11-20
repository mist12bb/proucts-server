const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const product_controller =
  require("../controllers/product.controller");
//router.get("/test",product_controller);
router.post("/create", product_controller.create);
router.get("/:id",product_controller.get);
router.delete("/:id/delete",product_controller.del);
router.get("/",product_controller.all);

module.exports = router;