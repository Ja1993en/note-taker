const newNoteBtn = document.querySelector('.new-note');
const saveNoteBtn = document.querySelector('.save-note')
const titleEl = document.querySelector('.note-title');
const textEl = document.querySelector('.note-textarea');
const url = "http://localhost:3001/api/notes";

// To dynamically hide elements 
const hide = (elem) => {
  return  elem.style.display = "none";
}

// To dynamically show elements 
const show = (elem) => {
  return  elem.style.display = "inline";
}
// Hides save button when new note icon is pressed 
const newNoteHandler = async () => {
titleEl.value = "";
textEl.value = "";
hide(saveNoteBtn);
}

// Dynamically show save btn 
const saveBtnHandler  = () => {
show(saveNoteBtn);
}


// Fetch POST to add new notes to database
const postNote = () => {

 const result = {
    noteTitle: titleEl.value,
    noteText: textEl.value  
  }  
fetch(url, {
  method: "POST",
  headers: {
// Telling the client the Data will be JSON
    'content-type': 'application/json'
  },
  body: JSON.stringify(result)

  
  });
renderNotes();
}



// Get Requst to gather all notes from db 
const getRequest = async () => {
  const result = await fetch(url, {
    method: 'GET',
  });
  const json = await result.json();
  console.log(json)

  return json;
  
}

//Fetch delete to delete notes from db
const deleteNote = async (id) => {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  
    if (!res.ok) {
      console.error("DELETE failed");
      return;
    }
    await renderNotes();
  }

// Displays all notes in db in html page
 const renderNotes = async () => {
  // Fetch request to get db elements
      const result  = await getRequest(); 
     console.log(result)
     
      const noteGroup = document.querySelector('.list-group');
     noteGroup.innerHTML = "";

// forloop to iterate of db elements
     for( let i = 0; i < result.length; i++ ){
     const noteCard  = document.createElement("li"); // Create a new <li> element
     const icon = document.createElement("i");
     const text = document.createElement("span");
 
     icon.className = "fas fa-solid text-danger fa-trash";
     noteCard.className= "list-group-item d-flex justify-content-between align-items-center";
 
     text.textContent = result[i].noteTitle // Create text content
 
     icon.addEventListener("click", (e) => {
      // Stops the event from bubbling up to the parent element 
      e.stopPropagation();
       deleteNote(result[i].id);
       titleEl.value = "";
       textEl.value = "";
       
       
     });
    //  If note card is clicked it display the saved note 
     noteCard.addEventListener("click", () => {
     
      titleEl.value = result[i].noteTitle
      textEl.value = result[i].noteText
     })
 
     noteCard.appendChild(text)
     noteCard.appendChild(icon)
     noteGroup.appendChild(noteCard)
     }
 }

// Event listeners to listen when DOM elements are clicked 
saveNoteBtn.addEventListener('click', postNote)
newNoteBtn.addEventListener("click", newNoteHandler);
textEl.addEventListener("click", saveBtnHandler);

renderNotes();