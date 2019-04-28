const mongoose = require("mongoose");
const schema = mongoose.Schema;

var bundlePageSchema = new schema({
    bundlePageBookList :[]
})

var BundlePageModel = mongoose.model("BundlePageModel",bundlePageSchema)
module.exports = {BundlePageModel}