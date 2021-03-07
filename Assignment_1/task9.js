function cal(){
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    
    
    
result = num1 - num2;
document.getElementById("sub").innerHTML= "The sub of  " + num1 +  " and " + num2 + " is " + result ;
result= num1*num2;
document.getElementById("mul").innerHTML= "The multiplication  of  " + num1 +  " and " + num2 + " is " + result ;
result=num1/num2;
document.getElementById("div").innerHTML= "The division of  " + num1 +  " and " + num2 + " is " + result ;
result=num1%num2;
document.getElementById("mod").innerHTML= "The modules of  " + num1 +  " and " + num2 + " is " + result ;



}