/*
============================================
; Title: hairston-hello-world.js
; Author: Professor Massoud
; Date:   8 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to use the built-in HTTP module
;===========================================
*/

//header
const header = require('../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Hello World'))

//start program

//variable declaration
var http = require("http");

/**
* Params: req, res
* Response: Welcome to the page!
* Description: creates a web server
*/
function processRequest(req, res) {
    var body = "Welcome to the page!";

    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length':contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);

//end program