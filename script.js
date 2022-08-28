const saveBtn = document.querySelector("#_saveBtn");
const newNoteBtn = document.querySelector("#_newNoteBtn");
const textZone = document.querySelector("#_textZone");

// массив записей в блокноте
let notesCounter = 4;
let arrOfNotes = [];

saveBtn.addEventListener("click", function () {
  let list = document.querySelector("#_list");

  if (textZone.value !== "") {
    let li = document.createElement("li");
    li.classList.add("notebook__item");
    notesCounter++;
    li.textContent = "Запись " + notesCounter;
    list.append(li);
  }
});
