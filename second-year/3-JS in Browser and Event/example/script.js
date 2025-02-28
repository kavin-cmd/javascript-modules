// Example 1: Change heading text
let heading = document.getElementById("title");
heading.textContent = "New Title!";

// Example 2: Change first paragraph background color
let para = document.querySelector("p");
para.style.backgroundColor = "yellow";

// Example 3: Create and append a new div
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

// Example 4: Add a new list item
let list = document.getElementById("myList");
let newItem = document.createElement("li");
newItem.textContent = "New List Item";
list.appendChild(newItem);

// Example 5: Modify input field placeholder
let inputField = document.querySelector("input");
inputField.placeholder = "Enter your name";

// Example 6: Remove an element on click
document.getElementById("removeMe").addEventListener("click", function () {
  this.remove();
});

// Example 7: Change font color of all paragraphs
let allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((p) => (p.style.color = "blue"));

// Example 8: Add a CSS class to the box
let box = document.getElementById("box");
box.classList.add("highlight");

// Example 9: Replace an element
let oldElement = document.getElementById("old");
let newElement = document.createElement("p");
newElement.textContent = "This is the replacement!";
oldElement.replaceWith(newElement);

// Example 10: Clone an element and append
let original = document.getElementById("original");
let clone = original.cloneNode(true);
document.body.appendChild(clone);
