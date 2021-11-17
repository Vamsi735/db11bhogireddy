var tree = require('../models/tree'); 
 
// List of all tree
exports.tree_list = async function (req, res) {
    try {
        thetree = await tree.find();
        res.send(thetree);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
 
// VIEWS
// Handle a show all view
exports.tree_view_all_Page = async function (req, res) {
    try {
        thetree = await tree.find();
        res.render('tree', { title: 'tree Search Results', results: thetree });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
 


// Handle tree create on POST. 
exports.tree_create_post = async function (req, res) {
    console.log(req.body)
    let document = new tree();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"tree_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand; 
    document.size = req.body.size; 
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
 
// Handle tree delete form on DELETE. 
exports.tree_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tree delete DELETE ' + req.params.id); 
}; 
 
// Handle tree update form on PUT.
exports.tree_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await tree.findById( req.params.id)
// Do updates of properties
if(req.body.tree_type)
toUpdate.tree_type = req.body.tree_type;
if(req.body.age) toUpdate.age = req.body.age;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// for a specific tree. 
exports.tree_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await tree.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};

// Handle tree delete on DELETE.
exports.tree_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await tree.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };


    // Handle a show one view with id specified by query 
    exports.tree_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await tree.findById( req.query.id) 
        res.render('treedetail',  
{ title: 'tree Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

 // Handle building the view for creating a tree. 
// No body, no in path parameter, no query. 
// Does not need to be async 
 exports.tree_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('treecreate', { title: 'tree Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a tree. 
// query provides the id 
exports.tree_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await tree.findById(req.query.id) 
        res.render('treeupdate', { title: 'tree Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.tree_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await tree.findById(req.query.id) 
        res.render('treedelete', { title: 'tree Delete', toShow:result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
    
 