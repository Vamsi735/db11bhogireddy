var express = require('express'); 
const tree_controlers= require('../controllers/tree'); 
var router = express.Router(); 
 
/* GET tree */ 
router.get('/', tree_controlers.tree_view_all_Page ); 
module.exports = router;  

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("tree", { title: "Search Results Tree" });
});

module.exports = router;

// for a specific tree.
exports.tree_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await tree.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
 };