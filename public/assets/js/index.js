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


// Event listeners to listen when DOM elements are clicked 
saveNoteBtn.addEventListener('click', postNote)
newNoteBtn.addEventListener("click", newNoteHandler);
textEl.addEventListener("click", saveBtnHandler);
