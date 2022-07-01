let notes_tag = document.querySelector(".notes-tab");
let savedNotes = localStorage.getItem("savedNotes2");

let notes = JSON.parse(savedNotes);

showNotes();


// show notes 
function showNotes(){
let html ;

  if (notes != ""){
   notes.forEach(function(elelment, index){
    html += `<div style="
    height: 100%;
    " id="added-note"class="added-note">
    <center>  <p style="
    font-family: 'Oxygen', serif;

    color: grey;
    padding-top: 1.5vh;
    "class="Title">${notes[index].note_title}</p>
  </center>
  <hr style="
  margin: 3vh;
  border-color: rgba(250,250,250,0.7);
  
  ">
  <p style="
    font-family: 'Oxygen', serif;

  color: grey;
    padding-top: 0.5vh;
    text-align: center;
  " class="Content">${notes[index].note_content}</p><br>
  <center><button id="${index}" onclick="deleteNote(this.id); localStorage.removeItem(this)" style="border:1px solid #999;
 background: linear-gradient(to right, rgba(255,255,255,0.1), #fff)">Delete Note</button>
   <button id="${index}" style="border:1px solid #999;
   background: linear-gradient(to right, rgba(255,255,255,0.1), #fff)">${notes[index].note_time}</button>
</center>
  </div>`;
   }) 
    
    notes_tag.innerHTML = html;
  } else {
    html = `<div style="margin-top: 80px" id="added-note"class="added-note">
  <center>  <p style="
  color: grey;
  padding-top: 1.5vh;
  "class="Title">No Notes available<br></p>
</center>
<hr style="
margin: 3vh;
border-color: rgba(250,250,250,0.7);
"><center>
<p style="color: grey;" class="Content">Click on the + button to add a new note </p>
</center>
</div>`;

    notes_tag.innerHTML = html;
  }
}

// delete function 

function deleteNote(index){
        
  notes.splice(index, 1);
  localStorage.setItem("savedNotes2", JSON.stringify(notes));
  showNotes();
}

