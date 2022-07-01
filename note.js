let title = document.querySelector(".addtitle .title");
let text = document.querySelector(".addcont .content");
let date = new Date();
let min = date.getHours();
let hrs = date.getMinutes();
let aec = date.getSeconds();
let day = date.getDay();
day++;
if(day == 1){day="Sunday"}
else if(day == 2){day="Mon"}
else if(day == 3){day="Tues"}
else if(day == 4){day="Wed"}
else if(day == 5){day="Thurs"}
else if(day == 6){day="Fri"}
else if(day == 7){day="Sat"}
    hrs = hrs < 10 ? "0" + hrs: hrs;
   min = min < 10 ? "0" + min : min;
    aec = aec < 10 ? "0" + aec : aec;

let datee = day + '&nbsp' + min + ':' + hrs + ':' + aec;
let savedNotes = localStorage.getItem("savedNotes2");

if (savedNotes == null) notes = [];
else notes = JSON.parse(savedNotes);




// add notes function 

function addNote(){
    notes.push({
      note_title: title.value,
      note_content: text.value,
      note_time: datee
    });

    localStorage.setItem("savedNotes2", JSON.stringify(notes))
    
    window.location = "./added-notes.html"
  };
