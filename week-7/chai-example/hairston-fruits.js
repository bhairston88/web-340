/*
============================================
; Title: hairston-fruits.js
; Author: Professor Massoud
; Date: 20 September 2020
; Modified By: Brooklyn Hairston
; Description: Function used in Chai test
;===========================================
*/

//header
const header = require('../../hairston-header')

console.log(header.display('Brooklyn','Hairston','Fruits'))

//start program
/**
 * params: str
 * response: output
 * description: splits a comma separated string into an array
 */
function fruits(str) {
    return str.split(",");
}

module.exports = fruits;

//end program 