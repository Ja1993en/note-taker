const newNoteBtn = document.querySelector('.new-note');
const saveNoteBtn = document.querySelector('.save-note')
const titleEl = document.querySelector('.note-title');
const textEl = document.querySelector('.note-textarea');
const url = "http://localhost:3001/api/notes";

const getRequest = async () => {
  const result = await fetch(url, {
    method: 'GET',
  });
  const json = await result.json();
  console.log(json)

  return json;
  
}

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
      e.preventDefault();
      e.stopPropagation();
       deleteNote(result[i].id);
       titleEl.value = ""
       textEl.value = ""
       
     });
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
// saveNoteBtn.addEventListener('click', postNote)
// newNoteBtn.addEventListener("click", newNoteHandler);
// textEl.addEventListener("click", saveBtnHandler);

renderNotes();