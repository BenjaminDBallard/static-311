//Import products data
const products = require("../data/products");

//Functions
function list(req, res) {
  res.json(products);
}

function show(req, res) {
  let index = products.findIndex((p) => p._id == req.params.id);
  res.json(products[index]);
}

function create(req, res) {
  req.body._id = products.length + 1;
  req.body.postID = 1;
  products.push(req.body);
  console.log(products);
  res.json(products);
}

//Export functions
module.exports = {
  list,
  show,
  create,
};
