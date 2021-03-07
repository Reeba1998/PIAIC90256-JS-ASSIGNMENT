var number;
document.getElementById('p').innerHTML= "Value after variable is " + number;
number=5;
document.getElementById('p1').innerHTML= "initial value " + number;
document.getElementById('p2').innerHTML= " value after increment value " +  ++number;
number=parseFloat(number+7);
document.getElementById('p3').innerHTML= " value after addition is " + number;
document.getElementById('p4').innerHTML= " value after decrement value " + --number;
document.getElementById('p5').innerHTML= " The reminder is  " + number%3;

