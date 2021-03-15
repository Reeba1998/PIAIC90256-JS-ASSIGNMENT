function cal(){
    var no  =document.getElementById('num').value;
    var rn= Math.round(no);
    var f=Math.floor(no);
    var c= Math.ceil(no);
    document.write("Number "+ no + "<br>"+ "Round off number "+ rn + "<br>" + "Floor Number "+ f + "<br>" +" Ceil Number "+ c );
}