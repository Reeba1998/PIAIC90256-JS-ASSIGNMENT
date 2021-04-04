var A=["cake","apple pie","cookies","chips","patties"];
var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ ma'am");
var val=search.toLowerCase();
var n=A.includes(val,4);
if(n===false){
    document.write(val+" is available at index "+A.indexOf(val)+" in our bakery");
}
else{
     document.write("we are sorry, "+val+" is not available in our bakery ");

}

