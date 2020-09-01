let operation = "";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("Hello World");
    document.getElementById("btn0").onclick = action;
    document.getElementById("btn1").onclick = action;
    document.getElementById("btnClr").onclick = action;
    document.getElementById("btnEql").onclick = action;
    document.getElementById("btnSum").onclick = action;
    document.getElementById("btnSub").onclick = action;
    document.getElementById("btnMul").onclick = action;
    document.getElementById("btnDiv").onclick = action;
  },
  false
);

function action(e) {
  let btn = e.target || e.srcElement;
  if (btn.id == "btnClr" || btn.id == "btnEql") {
    clearOrPrintResult(btn.id);
  } else {
    populateNumOrExp(btn.id);
  }
}

function populateNumOrExp(id) {
  let res_ = document.getElementById("res").innerHTML;

  switch (id) {
    case "btn0":
      res_ = res_ + "0";
      break;
    case "btn1":
      res_ = res_ + "1";
      break;
    case "btnSum":
      operation = "+";
      res_ = res_ + "+";
      break;
    case "btnSub":
      operation = "-";
      res_ = res_ + "-";
      break;
    case "btnMul":
      operation = "*";
      res_ = res_ + "*";
      break;
    case "btnDiv":
      operation = "/";
      res_ = res_ + "/";
      break;
  }

  document.getElementById("res").innerHTML = res_;
}

function clearOrPrintResult(id) {
  if (id == "btnClr") {
    document.getElementById("res").innerHTML = "";
  } else if (id == "btnEql") {
    console.log(operation);
    let input = document.getElementById("res").innerHTML;
    let args = input.split(operation);
    var args1 = parseInt(args[0], 2).toString(10);
    var args2 = parseInt(args[1], 2).toString(10);
    var res;
    switch (operation) {
      case "+":
        res = parseInt(args1) + parseInt(args2);
        break;
      case "-":
        res = parseInt(args1) + parseInt(args2);
        break;
      case "*":
        res = parseInt(args1) * parseInt(args2);
        break;
      case "/":
        res = parseInt(args1) / parseInt(args2);
        break;
    }
    document.getElementById("res").innerHTML = (res >>> 0).toString(2);
  }
}
