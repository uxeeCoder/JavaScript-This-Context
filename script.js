"use strict";
console.log("Say Hello World as Test");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const buttonHandler = {
  message1: "The button 01 was clicked",
  message2: "The button 02 was clicked",
  message3: "The button 03 was clicked",
  displayMessage1: function () {
    this.displayMessage(this.message1);
  },
  displayMessage2: function () {
    this.displayMessage(this.message2);
  },
  displayMessage3: function () {
    this.displayMessage(this.message3);
  },
  displayMessage: function (message) {
    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  },
};

button1.addEventListener(
  "click",
  buttonHandler.displayMessage1.bind(buttonHandler)
);
button2.addEventListener(
  "click",
  buttonHandler.displayMessage2.bind(buttonHandler)
);
button3.addEventListener(
  "click",
  buttonHandler.displayMessage3.bind(buttonHandler)
);

const person = {
  name:'Jenny',

  greet: function () {
    console.log ('Hello,', this.name);
  },
};
