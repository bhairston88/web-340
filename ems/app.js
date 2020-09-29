/*
============================================
; Title: app.js
; Author: Professor Massoud
; Date:   27 September 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates EJS Layouts
;===========================================
*/

//header
const header = require('../hairston-header.js')

console.log(header.display('Brooklyn','Hairston','EMS'))

//start program

//require statements

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
const { appendFileSync } = require('fs');
var mongoose = require("mongoose");
var Employee = require("./models/employee");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

//database connection string to MongoDB Atlas
var mongoDB = "mongodb+srv://bhairston:Fat1810Bun!!@buwebdev-cluster-1.iztjy.mongodb.net/ems?retryWrites=true&w=majority";

//mongoose connection
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//sets up CSRF protection
let csrfProtection = csrf({ cookie: true });

//initialize application

var app = express();

//Tell express the views are in the 'views' directory

app.set("views", path.resolve(__dirname, "views"));

//Tell express to use the ejs view engine

app.set("view engine", "ejs");

//Use statements

app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken= token;
    next();
});

app.use(helmet.xssFilter());

//Tell express to use the 'public' directory

app.use(express.static(__dirname +"/public"));

//create an employee model
var employee = new Employee( {
    firstName: "John",
    lastName: "Doe"
});

//returns the index.ejs page
app.get("/", function(request, response) {
    response.render("index", {
        title: "Rogue Design"
    });
});

//http calls
app.get("/", function(request, response) {
    response.render("index", {
        message: "XSS Prevention Example"
    });
});

//routing
app.get("/", function(request, response) {
    response.render("new", {
        message: "New Employee Entry Page"
    });
});

app.post("/process", function(request, response) {
    console.log(request.body.txtName);
    if (!request.body.txtName) {
        response.status(400).send("Entries must have a name");
    return;
    }

    //get the request's form data
    var employeeName = request.body.txtName;
    console.log(employeeName);

    //create an employee model
    var employee = new Employee( {
        name: employeeName
    });

    //save
    employee.save(function(error) {
        if (error) throw error; 
        console.log(employeeName + "saved successfully!");
    });

    response.redirect("/");
});

app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
        if (error) throw error;

        response.render("list", {
            title: "Employee List",
            employees: employees
        });
    });
});

//Creates a new server to listen to the port 8080

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

//end program