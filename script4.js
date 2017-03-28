"use strict";

var listItems = ["Corn flakes","Maggi","Oats","Oil","Detergent","Honey","Biscuit","Honey flakes","Salty Biscuit","DreamLite"];

var [a1,a2,a3,...a4] = listItems;

console.log(a1);
console.log(a4);

var foo = {
	var1 : "3",
	var2 : "5"
}

var {var1:hey} = foo;
var {var2:varExample,} = foo;
console.log(hey);
console.log(varExample);

var randomArray = ["1","2","3"];

var concatenateAutomatically= [...listItems,...randomArray];

console.log(concatenateAutomatically);

function myFoo(arg1,arg2,...argn){
 console.log("rest" + argn);
}

myFoo(1,2,3,4,5,6,7);



