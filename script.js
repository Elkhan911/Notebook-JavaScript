const notebook = document.querySelector("#_notebook");
const saveBtn = document.querySelector("#_saveBtn");
const newNoteBtn = document.querySelector("#_newNoteBtn");
let textZone = document.querySelector("#_textZone");

let list = document.querySelector("#_list");
let notesCounter = 4;
let arrOfNotes = ["note1", "note2", "note3", "note4"];

saveBtn.addEventListener("click", createNote);

// функция создания новой записи
function createNote() {
  if (textZone.value !== "") {
    let li = document.createElement("li");
    li.classList.add("notebook__item");
    notesCounter++;
    li.textContent = "note" + notesCounter;
    li.setAttribute("data-text", textZone.value);
    list.append(li);

    arrOfNotes.push(li.textContent);
    console.log(arrOfNotes);

    textZone.value = "";
  }
}
