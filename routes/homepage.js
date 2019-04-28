const express = require("express");
const router = express.Router();

var {HomePageModel} = require("./../models/homepagemodel");
var {Books} = require("./../models/bookmodel");


router.get("/",(req,res)=>{
    HomePageModel.find().then((doc)=>{
        res.send(doc)
    })
})

router.post("/",(req,res)=>{
    var mostpopularbooks = []
    var todayspecialbooks = []
    var bundlebooks = []
    for(i=0;i<6;i++) {
        var sbn = req.body.mostpopularbookslist[i].bookName
        sbn = sbn.toLowerCase()
        var newBook = new Books({
            bookName : req.body.mostpopularbookslist[i].bookName,
            searchBookName : sbn,
            authorName : req.body.mostpopularbookslist[i].authorName,
            coverURL : req.body.mostpopularbookslist[i].coverURL,
            downloadLink : req.body.mostpopularbookslist[i].downloadLink,
            rating : req.body.mostpopularbookslist[i].rating
        })
        newBook.save().then((doc)=>{
            console.log("book added to main book list");
        })
        mostpopularbooks.push(newBook)
    }
    for(i=0;i<2;i++) {
        var sbn = req.body.mostpopularbookslist[i].bookName
        sbn = sbn.toLowerCase()
        var newBook = new Books({
            bookName : req.body.todayspecialbookslist[i].bookName,
            searchBookName : sbn,
            authorName : req.body.todayspecialbookslist[i].authorName,
            coverURL : req.body.todayspecialbookslist[i].coverURL,
            downloadLink : req.body.todayspecialbookslist[i].downloadLink,
            rating : req.body.todayspecialbookslist[i].rating
        })
        newBook.save().then((doc)=>{
            console.log("book added to main book list");
        })
        todayspecialbooks.push(newBook)
    }
    for(i=0;i<2;i++) {
        var sbn = req.body.mostpopularbookslist[i].bookName
        sbn = sbn.toLowerCase()
        var newBook = new Books({
            bookName : req.body.bundlebookslist[i].bookName,
            searchBookName : sbn,
            authorName : req.body.bundlebookslist[i].authorName,
            coverURL : req.body.bundlebookslist[i].coverURL,
            downloadLink : req.body.bundlebookslist[i].downloadLink,
            rating : req.body.bundlebookslist[i].rating
        })
        bundlebooks.push(newBook)
    }
    var newHomePageModel = new HomePageModel({
        mostPopularBooksList : mostpopularbooks,
        todaySpecialBooksList : todayspecialbooks,
        bundleBooksList : bundlebooks
    })
    newHomePageModel.save().then((doc)=>{
        console.log("homepage model saved")
        res.send(doc)
    })
})


module.exports = router;