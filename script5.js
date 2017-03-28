"use script";

// function foo (arg1,arg2 = 50) {
// 	console.log(arg1);
// 	console.log(arg2);
// 	console.log(arg1+arg2);
// }


var foo = (arg1,arg2)=>{
	var sum = arg1+arg2;
	return sum;
};

var foo1 = (arg1,arg2)=>{
	return arg1 + arg2;
};

var foo2 = (arg1,arg2)=>arg1 + arg2;



console.log(foo(100,200));
console.log(foo1(100,200));
console.log(foo2(100,200));