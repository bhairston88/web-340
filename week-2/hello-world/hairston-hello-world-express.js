/*
============================================
; Title: hairston-hello-world-express.js
; Author: Professor Massoud
; Date: 15 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to create an express application
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Hello World with Express'))

//start program

var express = require("express");

var http = require("http");

var app = express();

app.use(function(request, response) {
    console.log("In comes a request to:" + request.url);
    
    response.end("Hello World");
});

http.createServer(app).listen(8080);

//end program