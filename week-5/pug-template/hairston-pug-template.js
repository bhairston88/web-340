/*
============================================
; Title: hairston-pug-templates.js
; Author: Professor Massoud
; Date: 6 September 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to create and use Pug templates
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Pug Templates'))

//start program

//require statements
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

//app initialization 
var app = express();

//Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

//Tell Express to use the Pug view engine 
app.set("view engine", "pug");

//Return the index.pug page
app.get("/", function(request, response) {
    response.render("index", {
        message: "An Example Using Pug Templates."
    });
});

/**
 * Creates a new server to listen to the port 8080
 */
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

//end program