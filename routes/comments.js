//Import express
const express = require("express");

//Define route and controller
const commentsRouter = express.Router();
const commentsControl = require("../controllers/comments");

//Callback functions
commentsRouter.get("/comments", commentsControl.list);
commentsRouter.get("/comments", commentsControl.show);
commentsRouter.post("/comments", commentsControl.create);

//export route
module.exports = commentsRouter;
