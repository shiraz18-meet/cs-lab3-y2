var add = '+';
var sub = "-";
var mult = "*";
var div = "/";

var num1 = prompt("Enter the first number", "");
var num2 = prompt("Enter the first number", "");
var math = prompt("What math operation would you like to do?", "+,-,*,/");

if(math==add){
	result = Number(num1) + Number(num2);
}

if(math==sub){
	result = Number(num1) - Number(num2);
}

if(math==mult){
	result = Number(num1) * Number(num2);
}

if(math==div){
	result = Number(num1) / Number(num2);
}

alert("The answer is " + result);