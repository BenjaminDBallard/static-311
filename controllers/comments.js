//Import comments data
const comments = require("../data/comments");

//Functions
function list(req, res) {
  res.json(comments);
}

function show(req, res) {
  let index = comments.findIndex((p) => p._id == req.params.id);
  res.json(comments[index]);
}

function create(req, res) {
  req.body._id = comments.length + 1;
  req.body.postID = 1;
  comments.push(req.body);
  console.log(comments);
  res.json(comments);
}

//Export functions
module.exports = {
  list,
  show,
  create,
};
