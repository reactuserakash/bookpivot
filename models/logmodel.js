const mongoose = require("mongoose");
const schema = mongoose.Schema;

var logSchema = new schema({
    log : {
        type: String,
        required: true
    }
})

var Log = mongoose.model("Log",logSchema)
module.exports = {Log}