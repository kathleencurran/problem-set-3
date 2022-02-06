/*
 * Excercise 1
 *
 */

let colorBlock = document.querySelector("#color-block");
let blockText = document.querySelector("#color-name");

let convertButton = document.querySelector("#convertbtn");
let inputField = document.querySelector("#f-input");
let output = document.querySelector("#c-output");

/*
 * Then write a function that changes the text and the color inside the div
 *
 */

let i = 0;

function changeColor() {
  //Write a condition determine what color it should be changed to
  if (i == 0) {
    //change the background color using JS
    //Change the text of the color using the span id color-name
    colorBlock.style.backgroundColor = "#a3e4d7";
    blockText.textContent = "#a3e4d7";
    i = 1;
  } else {
    //change the background color using JS
    //Change the text of the color using the span id color-name
    colorBlock.style.backgroundColor = "#F08080";
    blockText.textContent = "#F08080";
    i = 0;
  }
}

colorBlock.addEventListener("click", (e) => changeColor());

/*
 * For excercise 2, you need to write an event handler for the button id "convertbtn"
 * on mouse click. For best practice use addEventListener.
 *
 */

/*
 * Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
 *
 */

function convertTemp(num) {
  //Calculate the temperature here
  //Send the calculated temperature to HTML
  let converted = (num - 32) * (5 / 9);
  output.innerHTML = converted.toFixed(2);
}

convertButton.addEventListener("click", (e) => {
  convertTemp(inputField.value);
});
