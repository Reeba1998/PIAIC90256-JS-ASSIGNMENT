var FNum=Number(prompt("enter your first number"));
var SNum=Number(prompt("enter your second number"));
var operator=prompt("enter the operator");
if(operator=='+'){
    alert("result: "+(FNum+SNum));
}
else if(operator=='-'){
    alert("result: "+(SNum-FNum));
}
else if(operator=='*'){
    alert("result: "+(SNum*FNum));
}
else if(operator=='/'){
    alert("result: " +(SNum/FNum));
}
else if(operator=='%'){
    alert("result: "+(SNum%FNum))
}
