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