/*
============================================
; Title: hairston-chai-and-mocha.js
; Author: Professor Massoud
; Date: 20 September 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to use chai and mocha
;===========================================
*/

//header
const header = require('../../hairston-header')

console.log(header.display('Brooklyn','Hairston','Chai and Mocha'))

//start program

//require statements

var fruits = require("../hairston-fruits");
var chai = require("chai");

var assert = chai.assert;

//unit test
describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits("Apple, Orange, Mango");
    });
});

//end program