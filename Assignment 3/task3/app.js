//Array by default
var colors=['red','yellow','blue','purple'];
document.write(colors);
document.write("<br>");
document.write("<br>");

//asking color to add in the beginning
colors.unshift(prompt("which color to add in the beginning"));
document.write(colors);
document.write("<br>");
document.write("<br>");

//asking color to add at the end 
colors.push(prompt("which color to add in the end"));
document.write(colors);
document.write("<br>");
document.write("<br>");

//asking two colors to add in the beginning
colors.unshift(prompt("an other color to add in the beginning"));
colors.unshift(prompt("and an other color to add in the beginning"));
document.write(colors);
document.write("<br>");
document.write("<br>");

//deleting first color in the list
colors.shift();
document.write(colors);
document.write("<br>");
document.write("<br>");

//deleting last color in the list
colors.pop();
document.write(colors);
document.write("<br>");
document.write("<br>");

//asking for the index and the color to add in the list 
var index=prompt("at what in index u want to add color ?");
var color=prompt("what color u want to add at your desired index?");
colors.splice(index,0,color);
document.write(colors);
document.write("<br>");
document.write("<br>");

//asking for the index and the number to delete from the list
var D_index=prompt("enter the index u want to delete");
var D_num=prompt("enter the number of elements u want to delete");
colors.splice(D_index,D_num);
document.write(colors);
document.write("<br>");
