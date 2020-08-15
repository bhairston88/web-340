/*
============================================
; Title: hairston-routes.js
; Author: Professor Massoud
; Date: 15 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates routing in nodeggi
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Routes'))

//start program

var express = require("express");

var http = require("http");

var app = express();

app.get("/", function(request, response) {
    response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
    response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
    response.end("Welcome to the contact page!");
});

app.use(function(request, response) {
    response.statusCode = 404;
    response.end("404!");
});

http.createServer(app).listen(8080);

//end program