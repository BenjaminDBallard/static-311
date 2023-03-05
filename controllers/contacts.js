//Import contacts data
const contacts = require("../data/contacts");

//Functions
function list(req, res) {
  res.json(contacts);
}

function show(req, res) {
  let index = contacts.findIndex((p) => p._id == req.params.id);
  res.json(contacts[index]);
}

function create(req, res) {
  req.body._id = contacts.length + 1;
  req.body.postID = 1;
  contacts.push(req.body);
  console.log(contacts);
  res.json(contacts);
}

//Export functions
module.exports = {
  list,
  show,
  create,
};
