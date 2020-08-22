/*
============================================
; Title: hairston-logging.js
; Author: Professor Massoud
; Date: 22 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to use Morgan Logging
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Logging'))

//start program

//require statements

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//initialize the application
var app = express();

app.set("views", path.resolve(__dirname, "views")); //Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); //Tell Express to use the EJS view engine

app.use(logger("short"));

//returns the index.ejs page
app.get("/", function (request, response) {
    response.render("index", {
        message: "This is how you use the Morgan Logger!"
    });
});

//creates a new server to listen to the port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});

//end program 