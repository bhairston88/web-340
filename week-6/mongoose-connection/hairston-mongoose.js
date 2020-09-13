/*
============================================
; Title: hairston-mongoose.js
; Author: Professor Massoud
; Date: 13 September 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to create a mongoose connection
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Mongoose'))

//start program

//require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

//mongoose database connection
var mongoDB = "mongodb+srv://bhairston:Fat1810Bun@buwebdev-cluster-1.iztjy.mongodb.net/test"

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//initialize application
var app = express()
app.use(logger("dev"));

/**
 * Creates a new server to listen to the port 5000
 */

http.createServer(app).listen(5000, function() {
    console.log("Application started and listening on port 5000");
});

//end program