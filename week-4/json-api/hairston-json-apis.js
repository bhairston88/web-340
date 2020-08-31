/*
============================================
; Title: hairston-json-apis.js
; Author: Professor Massoud
; Date: 31 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to create and use an Express API
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','JSON APIs'))

//start program

//require statements 

var express = require("express");
var http= require("http");

//initialize application 
var app = express();

//create a get request and return a JSON object
app.get("/employee/:info", function (request, response) {
    
    var id = parseInt(request.params.id, 10);
        response.json({
            name: "Brooklyn Hairston",
            jobTitle: "Warehouse Supervisor",
            age: 33,
        });
});

/**
 * Creates a new server to listen to the port 8080
 */
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");
});

//end program