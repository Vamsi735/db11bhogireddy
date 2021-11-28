const mongoose = require("mongoose")
const treeSchema = mongoose.Schema({
    tree_type: {
        type: String,
        minlength:4
    },
    size: {
        type: String,
        minlength:7
    },
    age: String
})
module.exports = mongoose.model("tree", treeSchema)