function addTwo(){
  return a+b;
}

function subTwo(){
  return a-b;
}

function multTwo(){
  return a*b;
}

function divTwo(){
  return a/b;
}

function powTwo(){
  return a**b;
}

function sqrt(){
  return Math.sqrt(a);
}


var operation = prompt("Please write a function (addition, subtraction, multiplication, division, power or squareroot)");
var operation2 = operation.toLowerCase();
if(operation2){
a = parseInt(prompt("Please write the first number"))
b = parseInt(prompt("Please write a second number"))

const calcOps = {addition: addTwo(), subtraction: subTwo(), multiplication: multTwo(), division: divTwo(), power:powTwo(), squareroot: sqrt()};

console.log(`The result of your ${operation2} input is...`);
console.log(calcOps[operation2] || "Not a valid entry");
}

else{
  console.log("Something went wrong...")
}
