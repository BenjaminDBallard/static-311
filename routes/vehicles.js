//Import express
const express = require("express");

//Define route and controller
const vehiclesRouter = express.Router();
const vehiclesControl = require("../controllers/vehicles");

//Callback functions
vehiclesRouter.get("/vehicles", vehiclesControl.list);
vehiclesRouter.get("/vehicles", vehiclesControl.show);
vehiclesRouter.post("/vehicles", vehiclesControl.create);

//export route
module.exports = vehiclesRouter;
