const express = require("express");
const router = express.Router();

var {Books} = require("./../models/bookmodel");

router.get("/",(req,res)=>{
    Books.find().then((doc)=>{
        res.send(doc)
    })
})

router.post("/",(req,res)=>{
    var newBook = new Books({
        bookName : req.body.bookName,
        searchBookName : req.body.bookName.toLowerCase(),
        authorName : req.body.authorName,
        coverURL : req.body.coverURL,
        downloadLink : req.body.downloadLink,
        rating : req.body.rating
    })
    newBook.save().then((doc)=>{
        console.log("Book Saved")
        res.send(doc)
    })
})

module.exports = router;