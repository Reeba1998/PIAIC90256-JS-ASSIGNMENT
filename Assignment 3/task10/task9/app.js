var A=[24,53,78,91,12];
document.write("Array items:"+A);
document.write("<br>");
var target;
var temp;
for(var i=0;i<A.length;i++){
    target=A[i];
    for(var j=1;j<A.length;j++){
        if(target>A[j]){
            temp=target;
        }
    }
}
document.write("The Largest number is ")
document.write(temp);