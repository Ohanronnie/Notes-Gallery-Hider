  var num = document.getElementById('num');
  var password = localStorage.getItem("pass");

function validate(){
  var password = localStorage.getItem("pass");
  var number = document.getElementById('num').value;
 if(number.length < 1){
    alert('Input your password');
    num.style.border = "1px solid red";
    num.style.outline = "1px solid red";
}
else if(number != password){
    alert('Incorrect Password')
    num.style.border = "1px solid red";
    num.style.outline = "1px solid red";
  }
  else{
    num.style.border = "1px solid green";
    num.style.outline = "1px solid green";
    localStorage.setItem('newpass', number)
    window.location = "./Added-pictures.html"
    
  }
    if(num.style.border=="1px solid red"){       document.getElementById("demo").innerHTML="incorrect password";
    }
    else {
      document.getElementById("demo").innerHTML = "Correct 👍";
          document.getElementById("demo").style.color="green";

    }

}
  if(password == null){
        window.location = "./newpass.html"

  }
function reload(){
   if (localStorage.getItem("pass") == null) {
    window.location = "./newpass.html";
  }
}
setInterval(reload, 1000);
