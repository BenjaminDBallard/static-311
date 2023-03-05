//Import express
const express = require("express");

//Define route and controller
const contactsRouter = express.Router();
const contactsControl = require("../controllers/contacts");

//Callback functions
contactsRouter.get("/contacts", contactsControl.list);
contactsRouter.get("/contacts", contactsControl.show);
contactsRouter.post("/contacts", contactsControl.create);

//export route
module.exports = contactsRouter;
