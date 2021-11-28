var express = require('express'); 
const tree_controlers= require('../controllers/tree'); 
var router = express.Router(); 
// A little function to check if we have an authorized user and continue on 
or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET tree */ 
router.get('/', tree_controlers.tree_view_all_Page ); 
module.exports = router;  

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("tree", { title: "Search Results Tree" });
});

/* GET detail tree page */
router.get('/detail', tree_controlers.tree_view_one_Page);

/* GET create tree page */ 
router.get('/create',secured, tree_controlers.tree_create_Page); 

/* GET create update page */ 
router.get('/update',secured, tree_controlers.tree_update_Page); 

/* GET create tree page */ 
router.get('/delete',secured, tree_controlers.tree_delete_Page); 
 

module.exports = router;

