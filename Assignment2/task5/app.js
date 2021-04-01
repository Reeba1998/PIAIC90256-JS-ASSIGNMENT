var secretNum=8;
var guessNum=Number(prompt("guess the number"));
if(guessNum===secretNum){
    alert("Bazinga!Correct answer");

}
else if((guessNum+1)===secretNum){
    alert("close enough to the correct answer");
}
else{
    alert("try again");
}