const express = require("express");
const router = express.Router();

var {BundlePageModel} = require("./../models/bundlepagemodel");
var {Books} = require("./../models/bookmodel");


router.get("/",(req,res)=>{
    BundlePageModel.find().then((doc)=>{
        res.send(doc)
    })
})

router.post("/",(req,res)=>{
    var bundlepagebooks = []
    for(i=0;i<req.body.totalbooks;i++) {
        var sbn = req.body.bundlepagebooklist[i].bookName
        sbn = sbn.toLowerCase()
        var newBook = new Books({
            bookName : req.body.bundlepagebooklist[i].bookName,
            searchBookName : sbn,
            authorName : req.body.bundlepagebooklist[i].authorName,
            coverURL : req.body.bundlepagebooklist[i].coverURL,
            downloadLink : req.body.bundlepagebooklist[i].downloadLink,
            rating : req.body.bundlepagebooklist[i].rating
        })
        newBook.save().then((doc)=>{
            console.log("book added to main book list");
        })
        bundlepagebooks.push(newBook)
    }
    
    var newBundlePageModel = new BundlePageModel({
        bundlePageBookList : bundlepagebooks,
    })
    newBundlePageModel.save().then((doc)=>{
        console.log("bundlepage model saved")
        res.send(doc)
    })
})


module.exports = router;