let buttonArrPos = [
  [0, 1, 2],
  [7, -1, 3],
  [6, 5, 4],
];

let buttonArr = [1, 2, 3, 6, 9, 8, 7, 4];

let counter = 1;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    renderButtons();
  },
  false
);

function renderButtons() {
  counter = 1;

  document.body.innerHTML = "";

  let container = document.createElement("div");
  container.className = "btnContainer";
  container.id = "btns";

  for (let i in buttonArrPos) {
    for (let j in buttonArrPos[i]) {
      let button_ = null;
      if (buttonArrPos[i][j] == -1) {
        button_ = createButton(-1);
      } else {
        button_ = createButton(buttonArrPos[i][j]);
      }
      container.appendChild(button_);
      document.body.appendChild(container);
    }
  }
}

function createButton(element_) {
  let clickMeButton = document.createElement("button");
  clickMeButton.className = "btnStyle";

  if (element_ == -1) {
    clickMeButton.id = "btn" + 5;
    clickMeButton.innerHTML = 5;
    clickMeButton.addEventListener("click", rotateButtons);
  } else {
    if (counter == 5) {
      counter++;
    }
    clickMeButton.id = "btn" + counter++;
    clickMeButton.innerHTML = buttonArr[element_];
  }

  return clickMeButton;
}

function rotateButtons() {
  buttonArr.splice(0, 0, buttonArr.pop());
  renderButtons();
}
