const calendar = document.getElementById("calendar");
const addHourBtn = document.getElementById("addHourBtn");
const removeHourBtn = document.getElementById("removeHourBtn");

let currentHour = 0;
const minHour = 1;
const maxHour = 23;

function createHourRow(hour) {
  const timeCell = document.createElement("div");
  timeCell.className = "time fade-in";
  timeCell.textContent = hour === 24 ? "00:00" : `${hour}:00`;
  calendar.appendChild(timeCell);

  for (let i = 0; i < 7; i++) {
    const cell = document.createElement("div");
    cell.contentEditable = true;
    cell.setAttribute("spellcheck", false);
    cell.classList.add("fade-in");

    cell.addEventListener("input", () => {
      const text = cell.textContent.trim();
      cell.classList.toggle("event", text.length > 0);
    });

    calendar.appendChild(cell);
  }
}

function removeHourRow() {
  if (currentHour <= minHour) return;
  for (let i = 0; i < 8; i++) {
    calendar.removeChild(calendar.lastElementChild);
  }
  currentHour--;
}

for (let i = 0; i < 10; i++) {
  createHourRow(currentHour++);
}

addHourBtn.addEventListener("click", () => {
  if (currentHour <= maxHour) {
    createHourRow(currentHour++);
  }
  updateButtons();
});

removeHourBtn.addEventListener("click", () => {
  removeHourRow();
  updateButtons();
});

function updateButtons() {
  addHourBtn.disabled = currentHour > maxHour;
  removeHourBtn.disabled = currentHour <= minHour;

  if (addHourBtn.disabled) addHourBtn.textContent = "Достигнут предел (23:00)";
  else addHourBtn.textContent = "Добавить строку";

  if (removeHourBtn.disabled) removeHourBtn.textContent = "Минимум 0:00";
  else removeHourBtn.textContent = "Удалить строку";
}

updateButtons();
