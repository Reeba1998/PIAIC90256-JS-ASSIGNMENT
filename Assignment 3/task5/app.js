

var arr1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
document.write(arr1);
var unique=[];

for (var i=0;i<arr1.length;i++){
    if(unique.indexOf(arr1[i])===-1){
       unique.push(arr1[i]);
    }
}
document.write("<br>");
document.write(unique);