var tree = require('../models/tree'); 
 
// List of all tree 
exports.tree_list = async function(req, res) { 
    try{ 
        thetree = await tree.find(); 
        res.send(thetree); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};   
 
// for a specific tree. 
exports.tree_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: tree detail: ' + req.params.id); 
}; 
 
// Handle tree create on POST. 
exports.tree_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: tree create POST'); 
}; 
 
// Handle tree delete form on DELETE. 
exports.tree_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tree delete DELETE ' + req.params.id); 
}; 
 
// Handle tree update form on PUT. 
exports.tree_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: tree update PUT' + req.params.id); 
}; 