//Import express
const express = require("express");

//Define route and controller
const productsRouter = express.Router();
const productsControl = require("../controllers/products");

//Callback functions
productsRouter.get("/products", productsControl.list);
productsRouter.get("/products", productsControl.show);
productsRouter.post("/products", productsControl.create);

//export route
module.exports = productsRouter;
