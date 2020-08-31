/*
============================================
; Title: hairston-http-status-codes.js
; Author: Professor Massoud
; Date: 31 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to return HTTP status codes
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','HTTP Status Codes'))

//start program

//require statements

var express = require("express");
var http = require("http");

//initialize application 

var app = express();


//returns a 404 status code
app.get("/not-found", function(request, response) {

    response.status(404);
    response.json({
        error: "We couldn't find what you were looking for."
    })
});

//returns a 200 status code
app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message:"Everything looks okay."
    })
});

//return 501 status code
app.get("not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "The page couldn't be implemented, sorry."
    })
});


/**
 * Creates a new server to listen to the port 8080
 */
http.createServer(app).listen(8080, function(){

    console.log("Application started on port 8080!");
});

//end program