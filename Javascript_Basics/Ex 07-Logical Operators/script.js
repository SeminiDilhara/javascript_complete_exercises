//Logical Operators

var a = 10;
var b = 10;
var c = 5;

//And
if(a == 10 && a == b){
	console.log("It is good");
}


//OR
else if(a > 10 || c > b){
	console.log("It is ok!");
}


//NOT
else if(a != c){
	console.log("It is normal!");
}

else{
	console.log("It is bad!");
}