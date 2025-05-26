const calendar = document.getElementById("calendar");
const addHourBtn = document.getElementById("addHourBtn");
const removeHourBtn = document.getElementById("removeHourBtn");

let currentHour = 1;
const minHour = 2;
const maxHour = 24;

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

// Инициализация от 9:00 до 18:00
for (let i = 0; i < 10; i++) {
  createHourRow(currentHour++);
}

// Добавление часа
addHourBtn.addEventListener("click", () => {
  if (currentHour <= maxHour) {
    createHourRow(currentHour++);
  }
  updateButtons();
});

// Удаление часа
removeHourBtn.addEventListener("click", () => {
  removeHourRow();
  updateButtons();
});

function updateButtons() {
  addHourBtn.disabled = currentHour > maxHour;
  removeHourBtn.disabled = currentHour <= minHour;

  if (addHourBtn.disabled) addHourBtn.textContent = "Достигнут предел (00:00)";
  else addHourBtn.textContent = "Добавить строку";

  if (removeHourBtn.disabled) removeHourBtn.textContent = "Минимум 01:00";
  else removeHourBtn.textContent = "Удалить строку";
}

updateButtons();
