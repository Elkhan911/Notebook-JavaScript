// const notebook = document.querySelector("#_notebook");
// const saveBtn = document.querySelector("#_saveBtn");
// const newNoteBtn = document.querySelector("#_newNoteBtn");
// let textZone = document.querySelector("#_textZone");
// const notebookItems = document.querySelectorAll(".notebook__item");
// const firstNote = document.querySelector("#_firstNote");
// const list = document.querySelector("#_list");

// // счетчик для текущего количества записей
// let notesCounter = 4;
// let arrOfNotes = ["Запись 1", "Запись 2", "Запись 3", "Запись 4"];

// // при окрытии блокнота - открывается первая запись по умолчанию
// textZone.value = firstNote.getAttribute("data-text");

// // функция для чтения содержимого записи
// function getTextNote() {
//   textZone.value = this.getAttribute("data-text");
// }

// // слушатель для записей блокнота, которые даны по умолчанию
// function getTextDeafaulNotes() {
//   let notebookItems = document.querySelectorAll(".notebook__item");
//   for (let notebookItem of notebookItems) {
//     notebookItem.addEventListener("click", getTextNote);
//   }
// }

// getTextDeafaulNotes();

// // функция создания новой записи
// newNoteBtn.addEventListener("click", function () {
//   textZone.value = "";
//   let li = document.createElement("li");
//   li.classList.add("notebook__item");
//   notesCounter++;
//   li.textContent = "Запись " + notesCounter;
//   li.setAttribute("data-text", textZone.value);
//   console.log(li.getAttribute("data-text"));
//   list.append(li);
// });

const notebook = document.querySelector("#_notebook");
const saveBtn = document.querySelector("#_saveBtn");
const newNoteBtn = document.querySelector("#_newNoteBtn");
let textZone = document.querySelector("#_textZone");
const notebookItems = document.querySelectorAll(".notebook__item");

let list = document.querySelector("#_list");
let notesCounter = 0;
let arrOfNotes = ["Запись 1", "Запись 2", "Запись 3", "Запись 4"];

for (let i = 0; i < arrOfNotes.length; i++) {
  addNote();
}
let currentNote;

function addNote() {
  let li = document.createElement("li");
  li.classList.add("notebook__item");
  notesCounter++;
  li.textContent = "Запись " + notesCounter;
  li.setAttribute("data-text", "Запись " + notesCounter);
  li.setAttribute("data-item", notesCounter.toString());
  list.append(li);
  li.addEventListener("click", openNote);
}

// // функция создания новой записи
// newNoteBtn.addEventListener("click", function () {
//   textZone.value = "";
//   let li = document.createElement("li");
//   li.classList.add("notebook__item");
//   notesCounter++;
//   li.textContent = "Запись " + notesCounter;
//   li.setAttribute("data-text", textZone.value);
//   console.log(li.getAttribute("data-text"));
//   list.append(li);
// });

function openNote(e) {
  currentNote = e.target;
  console.log(e.target);
  textZone.value = e.target.getAttribute("data-text");
}

function saveNote(e) {
  console.log(textZone.value);
  currentNote.setAttribute("data-text", textZone.value);
  console.log(currentNote.getAttribute("data-text"));
}

saveBtn.addEventListener("click", saveNote);
newNoteBtn.addEventListener("click", addNote);
