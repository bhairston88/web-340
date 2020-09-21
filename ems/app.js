/*
============================================
; Title: app.js
; Author: Professor Massoud
; Date:   11 September 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates EJS Layouts
;===========================================
*/

//header
const header = require('../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','EMS'))

//start program

//require statements

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
const { appendFileSync } = require('fs');
var mongoose = require("mongoose");
var Employee = require("./models/employee");

//database connection string to MongoDB Atlas
var mongoDB = "mongodb+srv://bhairston:Fat1810Bun!!@buwebdev-cluster-1.iztjy.mongodb.net/<dbname>?retryWrites=true&w=majority";

//mongoose connection
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//initialize application

var app = express();

//Tell express the views are in the 'views' directory

app.set("views", path.resolve(__dirname, "views"));

//Tell express to use the ejs view engine

app.set("view engine", "ejs");

//Tell express to use the logger

app.use(logger("short"));

//Tell express to use the 'public' directory

app.use(express.static(__dirname +"/public"));

//create an employee model
var employee = new Employee( {
    firstName: "John",
    lastName: "Doe"
});

//returns the index.ejs page

app.get("/", function(request, response) {
    response.render("index", {
        title: "Rogue Design"
    });
});


//Creates a new server to listen to the port 8080

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

//end program