
var Name=['Reeba','Hareem','Kiran'];
var score=[320,230,480];
var total=500;
for(var i=0;i<Name.length;i++){
    document.write("Score of  "+ Name[i]+" is "+score[i]+". Percentage:"+((score[i]/total)*100)+"%");
    document.write("<br>");
}