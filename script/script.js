
function validation() {
var name=document.magazine.username.value;  
var phone=document.magazine.phone.value; 
var email=document.magazine.email.value;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
     
if(!isNaN(name))
{
alert("Please Enter Only Characters in UserName");
document.magazine.username.select();
return false;
}
else if ((name.length < 5) || (name.length > 15))
{
alert("Username must be 5 to 15 Character");
document.magazine.username.select();
return false;
} 
else if(!email.match(mailformat))
alert("Enter a valid email id")
else if(phone.length<10){  
  alert("Phone Number must be at least 10 characters long.");  
  return false;  
  }  
  else{
    alert("You are now subscribed for newsletter!");
    location.assign("index.html"); 
  }
}
 
 function signupvalidation() {
    var name=document.signmeup.username.value;  
    var phone=document.signmeup.phone.value; 
    var email=document.signmeup.email.value;
    var pwd=document.signmeup.password.value;
    var cpwd=document.signmeup.cpassword.value; 
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!isNaN(name))
    {
    alert("Please Enter Only alpahabets in UserName");
    }
    
    else if ((name.length < 5) || (name.length > 15))
    {
    alert("Username must be 5 to 15 Character");
   
    }
    else if(!email.match(mailformat))
    alert("Enter a valid email id"); 
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
    alert("Cheerio! You are a part of Vie Rose community now!");  
}
    }
     
    function loginvalidation() {
      
      var email=document.loginform.email.value;
      var pwd=document.loginform.password.value;
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
   
   if(!email.match(mailformat))
    {
      alert("Enter correct email id!");
    } else if(!pwd.match(decimal))
     alert("Enter correct password"); 
    else 

   return true;
    
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

  function cart(){
    if(confirm("Add this item to cart?"))
    alert("Your item is added to the cart");
  }
  function logout() {
    var txt;
    if (confirm("Are you sure you want to logout?")) {
      alert("Logging you out!");
      location.replace("login.html");
    } else {
      txt = "Not logging out!";
    }
    
  }
  function pvalidation() {
    var email=document.frm.user.value;
    var pwd=document.frm.pd.value;
    var cpwd=document.frm.cpd.value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(pwd!=cpwd){
      alert("Password and confirm password fields must be same");
    }
    else if(!email.match(mailformat))
    alert("Enter a valid email id");
    else if(!pwd.match(decimal))
    alert("Password must contain a digit,an uppercase character and a special character");
    else
    {alert("Password is updated");
    
  }}
  
  