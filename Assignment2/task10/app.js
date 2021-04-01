var CorrectP="pakistanzindabad";
var Password=prompt("enter the password");
if(Password===''){
    Password=prompt("please enter your password");
    
}
else if(Password===CorrectP){
    alert("Correct! The password you entered matches the original password.");
}
else{
    alert("incorrect password");
}