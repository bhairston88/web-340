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
const header = require('../hairston-header')

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
var mongoDB = "mongodb+srv://bhairston:Fat1810Bun@buwebdev-cluster-1.iztjy.mongodb.net/ems?retryWrites=true&w=majority";

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
app.set("port", process.env.PORT||8080);

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


//returns the index.ejs page
app.get("/index", function(request, response) {
    response.render("index", {
    title: "Rogue Design"
    })
});

//http calls
app.get("/index", function(request, response) {
    response.render("index", {
        message: "XSS Prevention Example"
    });
});

//routing
//redirects to 'new' page
app.get("/new", function(request, response) {
    response.render("new", {
        title: "Rogue Design",
        message: "New Employee Entry Page"
    });
});

//redirects to 'list' page
app.get("/list", function(request, response) {
    Employee.find( {}, function(error, employees) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log(employees)
            response.render("list", {
                title: "Employee List",
                employees: employees
            })
        }
    });
});

//form submission page
app.post("/process", function(request, response) {
    console.log(request.body.txtFirstName);
    if (!request.body.txtFirstName) {
        response.status(400).send("Entries must have a first name!");
    return;
    } else if (!request.body.txtLastName) {
        response.status(400).send("Entries must have a last name!");
        return;
    }


    //get the request's form data
    var employeeFirstName = request.body.txtFirstName;
    var employeeLastName = request.body.txtLastName;
    console.log(employeeFirstName + employeeLastName);

    //create an employee model
    let employee = new Employee( {
        firstName: employeeFirstName,
        lastName: employeeLastName
    });

    //save
    employee.save(function(error) {
        if (error) {
            console.log(error);
        throw error; 
        } else {
        console.log(employeeFirstName + " " + employeeLastName + " " + "saved successfully!");
        response.redirect("/list");
        }
    });
    });
/** 
    app.get("/view/:queryFirstNameLastName", function (request, response) {
        var queryFirstName = request.params.queryFirstName 
        var queryLastName = request.params.queryLastName;

        Employee.find({"firstName": queryFirstName, "lastName": queryLastName}, function(error, employees) {
            if(error) {
                console.log(error);
                throw error;
            } else {
                console.log(employees);
            
            if (employees.length > 0) {
                response.render("view", {
                    title: "Employee Record",
                    employee: employee
                })
            } else {
                response.redirect("/index")
            }
            }
        })
    });

*/

//Creates a new server to listen to the port 8080

http.createServer(app).listen(app.get("port"), function() {
    console.log("Application started on port" + app.get("port"));
});

//end program