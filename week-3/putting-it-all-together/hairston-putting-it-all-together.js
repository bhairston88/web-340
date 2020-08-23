/*
============================================
; Title: hairston-putting-it-all-together.js
; Author: Professor Massoud
; Date: 23 August 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates routing and navigation in an Express application
;===========================================
*/

//header
const header = require('../../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Putting It All Together'))

//start program

//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//initialize the application
var app = express();

//Tell Express the views are in the 'views directory
app.set("views", path.resolve(__dirname, "views"));

//Tell Express to use EJS view engine
app.set("view engine", "ejs");

//Tell Express to use the logger
app.use(logger("short"));


/**
 * Return the index.ejs page
 */
app.get("/", function(request, response) {
    response.render("index", {
        message: "home page"
    });
});

/**
 * Return the about.ejs page
 */
app.get("/about", function(request, response) {
    response.render("about", {
        message: "about page"
    });
});

/**
 * Return the contact.ejs page
 */
app.get("/contact", function(request, response) {
    response.render("contact", {
        message: "contact page"
    });
});

/**
 * Return the products.ejs page
 */
app.get("/products", function(request, response) {
    response.render("products", {
        message: "products page"
    });
});

/**
 * Creates a new server to listen to the port 8080
 */
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.");
});

//end program
