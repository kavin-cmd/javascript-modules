// Example 1: Change heading text & color on click
let heading = document.getElementById("title");
heading.addEventListener("click", function () {
  this.textContent = "You clicked me!";
  this.style.color = "green";
});

// Example 2: Change first paragraph background color on hover
let para = document.getElementById("paragraph");
para.addEventListener("mouseover", function () {
  this.style.backgroundColor = "yellow";
});
para.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

// Example 3: Create and append a new div
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

// Example 4: Add a new list item
let list = document.getElementById("myList");
let newItem = document.createElement("li");
newItem.textContent = "New List Item";
list.appendChild(newItem);

// Example 5: Modify input field placeholder on focus
let inputField = document.getElementById("nameInput");
inputField.addEventListener("focus", function () {
  this.placeholder = "Start typing...";
});
inputField.addEventListener("blur", function () {
  this.placeholder = "Type something...";
});

// Example 6: Remove an element on click
document.getElementById("removeMe").addEventListener("click", function () {
  this.remove();
});

// Example 7: Change font color of all paragraphs
let allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((p) => (p.style.color = "blue"));

// Example 8: Toggle class on box when clicked
let box = document.getElementById("box");
box.addEventListener("click", function () {
  this.classList.toggle("highlight");
});

// Example 9: Replace an element on double-click
let oldElement = document.getElementById("old");
oldElement.addEventListener("dblclick", function () {
  let newElement = document.createElement("p");
  newElement.textContent = "This is the replacement!";
  this.replaceWith(newElement);
});

// Example 10: Prevent right-click on an element
let original = document.getElementById("original");
original.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  alert("Right-click is disabled!");
});

// Additional: Detect mouse press and release
document.body.addEventListener("mousedown", function () {
  console.log("Mouse button pressed");
});
document.body.addEventListener("mouseup", function () {
  console.log("Mouse button released");
});
