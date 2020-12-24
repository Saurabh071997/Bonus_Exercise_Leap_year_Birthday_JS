import "./styles.css";

var inputText = document.querySelector("#txt-input");
var btn = document.querySelector("#btn");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  var year = parseInt(inputText.value, 10);
  // console.log(typeof year);

  if (year % 400 === 0) {
    outputDiv.innerText = year + "  is a leap year";
    return;
  }

  if (year % 100 === 0) {
    outputDiv.innerText = year + " is not a leap year";
    return;
  }

  if (year % 4 === 0) {
    outputDiv.innerText = year + " is a leap year";
    return;
  }

  outputDiv.innerText = year + " is not a leap year";
}

btn.addEventListener("click", clickHandler);
