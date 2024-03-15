"use strict";
// console.log("Say Hello World as Test");

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

  standardFunctionToGreet: function () {
    console.log ('Hello,', this.name);
  },

  arrowFunctionToGreet : () => {
    console.log ('Hello,', this.name);
  }
};

// Invoking functions
console.log('Standard Greeting');
person.standardFunctionToGreet(); // Logs as Hello, Jenny

// Explanation of 'this' in standard function:
// In the standard function context, 'this' refers to the object 'person' since it's called as a method of 'person'. Therefore, it correctly logs "Hello, Frank".


console.log('Arrow Function Greeting');
person.arrowFunctionToGreet(); // Logs as Hello, undefined

// Explanation of 'this' in arrow function:
// In the arrow function context, 'this' retains the value of the enclosing context, which is the global scope. Hence, 'this.name' is undefined, resulting in "Hello, undefined".


// Explanation of .bind():
// In event listeners, .bind() is necessary to explicitly set the 'this' context to the 'messageHandler' object. Otherwise, 'this' would refer to the button element that triggered the event.
// - This ensures that the methods like displayMessage1, displayMessage2, and displayMessage3 operate within the context of the 'messageHandler' object, allowing them to access properties like 'message1', 'message2', and 'message3' correctly.