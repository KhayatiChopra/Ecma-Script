"use strict";

function funWithoutShortcut(variable1,variable2){
	return{
	variable1 : variable1,
	variable2 : variable2}
}

function funWithShortcut(variable1,variable2){
	return{
	variable1,
	variable2}
}

var Print = funWithoutShortcut(2,3);
var anotherPrint = funWithShortcut(2,3);

console.log(Print);
console.log(anotherPrint);