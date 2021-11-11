const mongoose = require("mongoose")
const treeSchema = mongoose.Schema({
    tree_type: String,
    size: String,
    age: String
})
module.exports = mongoose.model("tree", treeSchema)