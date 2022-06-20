
function valider(){
  localStorage.removeItem("newpass")
}
function validd(){
var valid = localStorage.getItem("newpass")
if (valid == null) {
  window.location = "./index.html"
}
}
setInterval(validd, 1000);
setInterval(valider, 120000);
