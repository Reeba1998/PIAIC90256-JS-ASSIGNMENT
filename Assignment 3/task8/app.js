var n=Number(prompt("enter your number "));

//For Counting Number 

document.write("Counting:");
document.write("<br>");

for(var i=1;i<=n;i++){

    document.write(" "+i);
}
document.write("<br>");


//For Reverse Counting 
document.write("Reverse Counting:");
document.write("<br>");

for(var i=n;i>=1;i--){

    document.write(" "+i);
}
document.write("<br>");


//For Even number 

document.write("Even:");
document.write("<br>");
for(var i=0;i<=n;i++){
    if(i%2==0){
        document.write(" "+i);
    }
}
document.write("<br>");

//For Odd number

document.write("Odd:");
document.write("<br>");
for(var i=0;i<=n;i++){
    if(i%2==1){
        document.write(" "+i);
    }
}
document.write("<br>");

// For Series

document.write("Series:");
document.write("<br>");
for(var i=2;i<=n;i++){
    if(i%2==0){
        document.write(" "+i+"K");
    }
}
document.write("<br>");


