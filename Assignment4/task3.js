function verifyPassword() {
    var pw = document.getElementById("pswd").value;
    
    if(pw == "") {
       document.getElementById("message").innerHTML = "**Fill the password please!";
       return false;
    }
   

    if(pw.length < 8) {
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
       return false;
    }
    else {
        document.getElementById("msg").innerHTML = "**Password is correct";
        // alert("Password is correct");}
        return false;
  
  
  }}