var O_marks=Number(prompt("enter your obtained marks"));
var T_marks=Number(prompt("enter your total marks"));
var persentage=(O_marks/T_marks)*100;
if(persentage>=80){
    alert("Total marks:"+T_marks+"\nObtain marks:"+O_marks+"\nGrade: A-one \nRemarks: Excellent");

}
else if(persentage>=70){
    alert("Total marks:"+T_marks+"\nObtain marks:"+O_marks+"\nGrade: A \nRemarks: Good");

}
else if(persentage>=60){
    alert("Total marks:"+T_marks+"\nObtain marks:"+O_marks+"\nGrade: B \nRemarks: You need to  improve");


}
else if(persentage<60){
    alert("Total marks:"+T_marks+"\nObtain marks:"+O_marks+"\nGrade: Fail \nRemarks: Sorry");

}