var aCities=["Karachi","Lahore","Islamabad","Faisalabad"];
var o=["th","st","nd","rd"];
document.write(aCities);
document.write("<br>");
document.write(o);
document.write("<br>");
var temp=o.shift();
o.push(temp);
document.write(o);
document.write("<br>");

for(var i=0;i<aCities.length;i++){
    document.write((1+i)+o[i]+" choice is "+aCities[i]);
    document.write("<br>");
}