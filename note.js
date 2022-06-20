let title = document.querySelector(".addtitle .title");
let text = document.querySelector(".addcont .content");

let savedNotes = localStorage.getItem("savedNotes2");

if (savedNotes == null) notes = [];
else notes = JSON.parse(savedNotes);




// add notes function 

function addNote(){
    notes.push({
      note_title: title.value,
      note_content: text.value
    });

    localStorage.setItem("savedNotes2", JSON.stringify(notes))
    
    window.location = "./added-notes.html"
  };
