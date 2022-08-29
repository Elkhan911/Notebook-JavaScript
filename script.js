const notebook = document.querySelector("#_notebook");
const saveBtn = document.querySelector("#_saveBtn");
const newNoteBtn = document.querySelector("#_newNoteBtn");
let textZone = document.querySelector("#_textZone");

let list = document.querySelector("#_list");
let notesCounter = 4;
let arrOfNotes = ["запись1", "запись2", "запись3", "запись4"];

saveBtn.addEventListener("click", createNote);

//функция создания новой записи
function createNote() {
  if (textZone.value !== "") {
    let li = document.createElement("li");
    li.classList.add("notebook__item");
    notesCounter++;
    li.textContent = "Запись " + notesCounter;
    list.append(li);

    arrOfNotes.push(li.textContent);
    console.log(arrOfNotes);

    textZone.value = "";
  }
}
