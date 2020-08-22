/*
============================================
; Title: hairston-advanced-routing.js
; Author: Professor Massoud
; Date: 22 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to use Advanced Routing
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Advanced Routing'))

//start program

//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//initialize the application
var app = express();

//Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

//Tell Express to use the EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:employeeId", function(request, response) {
    var employeeId = parseInt(request.params.employeeId, 10);
    response.render("index", {
        employeeId:employeeId
    })
});

//creates a new server to listen to the port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});