
function validation() {
var name=document.magazine.username.value;  
var phone=document.magazine.phone.value;  
if(!isNaN(name))
{
alert("Please Enter Only Characters in UserName");
document.magazine.username.select();
return false;
}
if ((name.length < 5) || (name.length > 15))
{
alert("Username must be 5 to 15 Character");
document.magazine.username.select();
return false;
} 
if(phone.length<10){  
  alert("Phone Number must be at least 10 characters long.");  
  return false;  
  }  
}
 function loginvalidation() {
           
 }
 function signupvalidation() {
    var name=document.signmeup.username.value;  
    var phone=document.signmeup.phone.value; 
    var email=document.signmeup.email.value;
    var pwd=document.signmeup.password.value;
    var cpwd=document.signmeup.cpassword.value; 
     var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!isNaN(name))
    {
    alert("Please Enter Only alpahabets in UserName");
    }
    
    else if ((name.length < 5) || (name.length > 15))
    {
    alert("Username must be 5 to 15 Character");
   
    }
    
   else if(phone.length<10){  
        alert("Phone Number must be at least 10 characters long.");  
         
        }  
    else if(pwd.length<8){
        alert("Password length must be 8 characters!");
    }
     else if(pwd!=cpwd){  
        alert("Password and Confirm Password fields must be same!");  
       
        }  
else if(!pwd.match(decimal))
alert("Password must have an UpperCase alphabet,a digit and a special character"); 
else{
    alert("Cheerio! You are a part of Vie Rose community now!")
}
    }

 function Show(){
    var a=document.getElementById("psswd");
    if(a.type==="password")
      a.type="text";
    else
      a.type="password";
  }
  function Check(){
    var a=document.getElementById("cpsswd");
    if(a.type==="password")
      a.type="text";
    else
      a.type="password";
  }
  