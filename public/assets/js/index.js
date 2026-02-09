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
     
// forloop to iterate of db elements
     for( let i = 0; i < result.length; i++ ){
 
     }
 }

// Event listeners to listen when DOM elements are clicked 
// saveNoteBtn.addEventListener('click', postNote)
// newNoteBtn.addEventListener("click", newNoteHandler);
// textEl.addEventListener("click", saveBtnHandler);

renderNotes();