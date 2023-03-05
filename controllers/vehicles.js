//Import vehicles data
const vehicles = require("../data/vehicles");

//Functions
function list(req, res) {
  res.json(vehicles);
}

function show(req, res) {
  let index = vehicles.findIndex((p) => p._id == req.params.id);
  res.json(vehicles[index]);
}

function create(req, res) {
  req.body._id = vehicles.length + 1;
  req.body.postID = 1;
  vehicles.push(req.body);
  console.log(vehicles);
  res.json(vehicles);
}

//Export functions
module.exports = {
  list,
  show,
  create,
};
