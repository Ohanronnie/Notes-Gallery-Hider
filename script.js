num = document.getElementById("num");
function save(){
  number = document.getElementById("num").value;
  if (number.length > 4) {
    alert('Your PIN must not be more than four');
    num.style.border = "1px solid red";
    num.style.outline = "1px solid red";
      document.getElementById("demo").innerHTML="Your PIN must not be more than four";
      document.getElementById("demo").style.color="red";

  }
  else if (number.length < 4) {
    alert('Your PIN must be up to four')
    num.style.border = "1px solid red";
    num.style.outline = "1px solid red";
    document.getElementById("demo").innerHTML="Your PIN must be up to four";
    document.getElementById("demo").style.color="red";

  }
  else {
   document.getElementById("demo").innerHTML="Good to go 👍👍";
   document.getElementById("demo").style.color="green";
    num.style.border = "1px solid green";
    num.style.outline = "1px solid green";
    localStorage.setItem("pass", number);
    window.location = "./index.html"
  }
}
function reload(){
   if (localStorage.getItem("pass") != null) {
    window.location = "./index.html";
  }
}
setInterval(reload, 1000);
