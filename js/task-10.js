function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");


function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const createEl = document.createElement("div");

    createEl.style.width = 30 + 10 * i + "px";
    createEl.style.height = 30 + 10 * i + "px";
    createEl.style.backgroundColor = getRandomHexColor();

    boxesEl.append(createEl);
  }
}

createBtn.addEventListener("click", function () {
  const amount = inputEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener("click", function () {
	boxesEl.innerHTML = "";
	inputEl.value = "";
});
