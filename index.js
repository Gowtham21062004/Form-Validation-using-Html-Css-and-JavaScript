function  validate(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var city=document.getElementById("city").value;
    var number=document.getElementById("number").value;
    var address=document.getElementById("address").value;

    if(fname!="" && lname!="" && city!="" && number!="" && address!=""){
      return true;    
     }
     else{
        alert("Enter all fields");
        return false;
     }
    


}