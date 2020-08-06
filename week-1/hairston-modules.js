/*
========================================
; Title: Exercise 1.3 - Modules
; Author: Professor Massoud
; Date: 6 August 2020
; Modified by: Brooklyn Hairston
; Description: Module Example
;========================================
*/

var url = require("url");

var parsedURL = url.parse("https://www.thiswebsite.com/profile?name=hairston");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);