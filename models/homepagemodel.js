const mongoose = require("mongoose");
const schema = mongoose.Schema;

var homePageSchema = new schema({
    mostPopularBooksList :[],
    todaySpecialBooksList : [],
    bundleBooksList : []
})

var HomePageModel = mongoose.model("HomePageModel",homePageSchema)
module.exports = {HomePageModel}