 pass_wor = document.getElementById("pass");
newpass = document.getElementById("newpas");
function myfunction(){
   pass = document.getElementById("pass").value;
newpas = document.getElementById("newpas").value;
emer = localStorage.getItem('emerg_pass')
if(pass != emer){
  alert('Invalid Entry')
}
else{
  localStorage.setItem('pass', newpas)
  window.location = "./Added-pictures.html"
}
}
