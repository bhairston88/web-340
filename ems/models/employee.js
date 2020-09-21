/*
============================================
; Title: employee.js
; Author: Professor Massoud
; Date: 20 September 2020
; Modified By: Brooklyn Hairston
; Description: File for the Employee database model
;===========================================
*/

//header
const header = require('../../hairston-header')

console.log(header.display('Brooklyn','Hairston','Chai and Mocha'))

//start program

//require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Employee Schema
let EmployeeSchema = new Schema( {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
});

//define the employee model
var Employee = mongoose.model("Employee", EmployeeSchema);

//export the model so its publicly available
module.exports = Employee;

//end program