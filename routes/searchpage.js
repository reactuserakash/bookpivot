const express = require("express");
const router = express.Router();

var {Books} = require("./../models/bookmodel");


router.get("/:searchstring",(req,res)=>{
    var stext = req.params.searchstring;
    stext = stext.toLowerCase();
    Books.find({searchBookName:{$regex: `${stext}`}}).then((doc)=>{
        res.send(doc)
    })
})


module.exports = router;