// var imagesObject = [];
let savedImages = localStorage.getItem('images');
if (savedImages) imagesObject = JSON.parse(savedImages);
else imagesObject = [];
document.getElementById('files').addEventListener('change', handleFileSelect, false);
function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = function(e) {
     // displayImgData(e.target.result)
      addImage(e.target.result);
    };

    reader.readAsDataURL(f);
  }
}
function addImage(imgData) {
  imagesObject.push(imgData);
//  displayNumberOfImgs();
 localStorage.setItem("images", JSON.stringify(imagesObject));

    window.location="./Added-pictures.html"

}
