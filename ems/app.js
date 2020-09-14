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