function cal(){
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    result= num1 + num2;

    document.getElementById("sum").innerHTML= "The sum of  " + num1 +  " and " + num2 + " is " + result ;

}