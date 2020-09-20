/*
============================================
; Title: hairston-tdd-in-action.js
; Author: Professor Massoud
; Date: 20 September 2020
; Modified By: Brooklyn Hairston
; Description: Demonstrates how to create and use TDD testing
;===========================================
*/

//header
const header = require('../../hairston-header')

console.log(header.display('Brooklyn','Hairston','TDD in ACtion'))

//start program

//require statement
var assert = require("assert");

//unit test
describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray("Apple, Orange, Mango".split(",")));
    });
});

//end program