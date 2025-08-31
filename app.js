const enterBtn = document.querySelector(".enterBtn");
const heightInput = document.getElementById("heightValue");
const widthInput = document.getElementById("widthValue");
const containerBox = document.querySelector(".container");
const rowsValue = document.getElementById("rowsValue");
const colsValue = document.getElementById("columnValue");
let randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
enterBtn.addEventListener("click", () => {
  containerBox.style.height = Number(heightInput.value) + "px";
  containerBox.style.width = Number(widthInput.value) + "px";
  containerBox.style.margin = "30px";
  containerBox.innerHTML = "";
  for (let i = 0; i < Number(rowsValue.value); i++) {
    for (let z = 0; z < Number(colsValue.value); z++) {
      const box = document.createElement("div");
      box.className = "box";
      box.style.height = Number(heightInput.value / rowsValue.value) + "px";
      box.style.width = Number(widthInput.value / colsValue.value) + "px";
      box.style.boxSizing = "border-box";
      box.style.border = "0.5px solid black";
      containerBox.appendChild(box);
      const elements = document.querySelectorAll("div.box");
      elements.forEach(function (element) {
        element.addEventListener("mouseenter", () => {
          element.style.backgroundColor = randomColor();
        });
      });
    }
  }
});
