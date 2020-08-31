let clickMeButton = document.createElement("button");
clickMeButton.id = "btn";
clickMeButton.innerHTML = "0";
clickMeButton.style.class = "btn";
document.body.appendChild(clickMeButton);

clickMeButton.onclick = function () {
  let counter = clickMeButton.innerHTML;
  counter++;
  clickMeButton.innerHTML = counter;
};
