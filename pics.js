function setpass(){
  if(localStorage.getItem('emerg_pass') == null){
  var emerg_pass = window.prompt("\n \t \n Set your Emergency Password");
  localStorage.setItem("emerg_pass", emerg_pass)
  
}/*
else{ window.prompt("\n \t \n Set your Emergency Password")
}*/
}
setInterval(setpass, 3000);
loadFromLocalStorage();
function loadFromLocalStorage() {
  var images = JSON.parse(localStorage.getItem("images"));

  if (images && images.length > 0) {
    imagesObject = images;
    images.forEach(displayImgData);
  }
  setpass();
}

function displayImgData(imgData, index) {
  var span = document.createElement('div');
  span.innerHTML = `<img  class= "img-btn-add" src="${imgData}"><center> <a href="${imgData}" download> <button onclick="">Download <i class="far fa-arrow-alt-circle-down"></i></button></a><br>          <button id="${index}" onclick="  deleteNote(this.id); localStorage.removeItem(this)
">Delete <i class="fa fa-trash-o"></i></button></center>
` 
;

  document.getElementById('list').insertBefore(span, null);
    setpass();

}

/* function displayNumberOfImgs() {
  if (imagesObject.length > 0) {

    document.getElementById("state").innerHTML = imagesObject.length + " image" + ((imagesObject.length > 1) ? "s" : "") + " stored in your browser";

    document.getElementById("deleteImgs").style.display = "inline";

  } else {
    document.getElementById("state").innerHTML = "No images stored in your browser.";
    document.getElementById("deleteImgs").style.display = "none";
  }


}
*/
/*function deleteImages() {
  imagesObject = [];

  localStorage.removeItem("images");
  //displayNumberOfImgs()
  document.getElementById('list').innerHTML = "";
}*/
function deleteNote(index) {
     var imagesObject = JSON.parse(localStorage.getItem("images"));
   //  imagesObject = [];
  imagesObject.splice(index, 1);
  localStorage.setItem("images", JSON.stringify(imagesObject));
  window.location="./Added-pictures.html";
 setpass();
}

//document.getElementById('deleteImgs').addEventListener("click", deleteImages);

//loadFromLocalStorage();
