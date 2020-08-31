/*
============================================
; Title:  hairston-curl.js
; Author: Professor Krasso
; Date:   31 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','cURL'))

//start program

//require statements
var express = require("express");
var http = require("http");

//initialize application
var app = express();

//returns a GET response message
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

//returns a PUT response message
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

//returns a POST response message
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

//returns a DELETE response message
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

/**
 * Creates a new server to listen to the port 8080
 */
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

//end program
