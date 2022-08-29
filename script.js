const notebook = document.querySelector("#_notebook");
const saveBtn = document.querySelector("#_saveBtn");
const newNoteBtn = document.querySelector("#_newNoteBtn");
let textZone = document.querySelector("#_textZone");
const notebookItems = document.querySelectorAll(".notebook__item");

let list = document.querySelector("#_list");
let notesCounter = 4;
let arrOfNotes = ["Запись 1", "Запись 2", "Запись 3", "Запись 4"];

saveBtn.addEventListener("click", createNote);

// функция создания новой записи
function createNote() {
  if (textZone.value !== "") {
    let li = document.createElement("li");
    li.classList.add("notebook__item");
    notesCounter++;
    li.textContent = "Запись " + notesCounter;
    li.setAttribute("data-text", textZone.value);
    list.append(li);

    arrOfNotes.push(li.textContent);
    console.log(arrOfNotes);

    // решить вопрос чтоб при редактировании записи сохраниась отредактированная версия а не создавалась новая
    li.addEventListener("click", getNoteText);
  }
  textZone.value = "";
}

// функция для записи в блокнот
function getNoteText() {
  textZone.value = this.getAttribute("data-text");
}

// функция для чтения записей, которые даны по умолчанию
function getTextForDeafualtNotes() {
  for (let notebookItem of notebookItems) {
    notebookItem.addEventListener("click", getNoteText);
  }
}

getTextForDeafualtNotes();
