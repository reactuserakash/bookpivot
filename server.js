const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")

//import routes
const homepage = require("./routes/homepage");
const searchpage = require("./routes/searchpage");
const bundlepage = require("./routes/bundlepage");
const bookinsert = require("./routes/bookinsert");

//create server
const app = express()
app.use(bodyParser.json())

//logger
app.use((req,res,next)=>{
    const {Log} = require("./models/logmodel");
    var now = new Date
    now = now.toString()
    console.log(`${now} : ${req.method} ${req.url}`)
    var log = new Log({
        log : `${now} : ${req.method} ${req.url}` 
    })
    log.save()
    next()
})

//connect the routes
app.use("/bookpivotapi/homepage",homepage);
app.use("/bookpivotapi/searchpage",searchpage);
app.use("/bookpivotapi/bundlepage",bundlepage);
app.use("/bookpivotapi/bookinsert",bookinsert);


//connect to databse
var db = require("./config/config").mongoURI
mongoose.connect(db,{ useNewUrlParser: true }).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})


if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
} else {
    app.get("/",(req,res)=>{
        res.send("Server Page")
    })
}

const port = process.env.PORT || 4000
// start the server
app.listen(port,()=>{
    console.log(`Server at port ${port}`)
})


