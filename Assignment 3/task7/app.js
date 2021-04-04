var a=[10,20,4,40,60,70];
var b=[1,2,3,4,5,6,7,8,9,10];
var c=[];
//an other array to save the unique elements
var d=[];

var temp;
//1st pushing arrays in a new array
for(var i=0;i<a.length;i++){
    c.push(a[i]);
}
for(var i=0;i<b.length;i++){
    c.push(b[i]);
}
document.write(c);
document.write("<br>");
//arranging them in order

var j=0,key;

for (i = 1; i < c.length; i++)
    { 
        key = c[i]; 
        j = i - 1; 
 
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && c[j] > key)
        { 
            c[j + 1] = c[j]; 
            j = j - 1; 
        } 
        c[j + 1] = key; 
    } 
document.write(c);
document.write("<br>");

//removing the duplicate from the list
for(var k=0;k<c.length;k++){
    if(d.indexOf(c[k])===-1){
        d.push(c[k]);
    }
}
document.write(d);
document.write("<br>");

