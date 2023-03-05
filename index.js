//Import express
const express = require("express");
const bodyParser = require("body-parser");

//Import data
const contacts = require("./data/contacts");
const vehicles = require("./data/contacts");
const comments = require("./data/contacts");
const products = require("./data/contacts");

//Import routes
const contactsRoute = require("./routes/contacts");
const vehiclesRoute = require("./routes/vehicles");
const commentsRoute = require("./routes/comments");
const productsRoute = require("./routes/products");

//Define express instance
const app = express();

//Call middleware
app.use(express.static("public"));
app.use(bodyParser.json());

//Call routes
app.use(contactsRoute);
app.use(vehiclesRoute);
app.use(commentsRoute);
app.use(productsRoute);

//Define current port
const port = process.env.PORT || 4001;

//Confirm active port
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
