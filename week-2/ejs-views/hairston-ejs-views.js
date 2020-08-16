/*
============================================
; Title: hairston-ejs-views.js
; Author: Professor Massoud
; Date: 15 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to use EJS Views
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','EJS Views'))

//start program

//require statements
var http = require("http");
var express = require("express");
var path = require("path");

//initialize the application
var app = express();

app.set("views", path.resolve(__dirname,"views"));//Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); //Tell Express to use EJS view engine

/**
 * Return the index.ejs page
 */
app.get("/", function(request, response) {
    response.render("index.ejs", {
    firstName: "Brooklyn",
    lastName: "Hairston",
    address: "1920 Ormond Ave.",
    });
});

/**
 * Creates a new server to listen on the port 3000
 */
http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});

//end program