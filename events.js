const buttonA = document.querySelector("#button-a");
const buttonB = document.querySelector("#button-b");
const result = document.querySelector("#result");
const textA = document.querySelector("#text-a");
const textB = document.querySelector("#text-b");
const selectA = document.querySelector("#select-a");

function print(message) {
  const ts = Date.now();
  const line = document.createElement("div");
  line.innerText = ts + ": " + message;
  result.append(line);
}

function handleButtonAClickEvent() {
  print("Btton A Clicked");
}

function handleButtonBClickEvent() {
  print("Button B Clicked");
}

function handleTextAClickEvent() {
  print("Text A Clicked");
}

function handleTextBClickEvent() {
  print("Text B Clicked");
}

function handleSelectAClickEvent() {
  print("Select A Clicked");
}

buttonA.addEventListener("click", handleButtonAClickEvent);
buttonB.addEventListener("click", handleButtonBClickEvent);
textA.addEventListener("input", handleTextAClickEvent);
textB.addEventListener("input", handleTextBClickEvent);


window.addEventListener("load", () => {
  print("Window loaded");
});
