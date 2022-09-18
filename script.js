const notebook = document.querySelector("#_notebook");
const list = document.querySelector("#_list");
const newNoteBtn = document.querySelector("#_newNoteBtn");
const textZone = document.querySelector("#_textZone");
const saveBtn = document.querySelector("#_saveBtn");

let arrOfNotes = ["Запись 1", "Запись 2", "Запись 3", "Запись 4"];
let noteCounter = 1;
let currentNote;

for (let i = 0; i < arrOfNotes.length; i++) {
  addNote();
}

function addNote() {
  let li = document.createElement("li");
  li.classList.add("notebook__item");
  li.setAttribute("data-text", `Запись ${noteCounter}`);
  li.textContent = `Запись ${noteCounter}`;
  noteCounter++;
  list.append(li);
  li.addEventListener("click", openNote);
}

function openNote(event) {
  currentNote = event.target;
  textZone.value = currentNote.getAttribute("data-text");
}

function saveNote(event) {
  currentNote.setAttribute("data-text", textZone.value);
}

saveBtn.addEventListener("click", saveNote);
newNoteBtn.addEventListener("click", addNote);
