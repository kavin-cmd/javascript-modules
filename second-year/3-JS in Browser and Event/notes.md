# JavaScript Advanced Concepts for Technical Workshop

## **The Window Object**
The `window` object represents the browser's window and acts as the global object in the browser environment. It provides methods, properties, and events for interacting with the browser.

### **Key Features of the Window Object**
1. **Global Variables**: Variables declared globally are added to the `window` object.
2. **Methods**:
   - `alert()`: Displays an alert box.
   - `setTimeout()`: Executes a function after a delay.
   - `setInterval()`: Executes a function repeatedly at specified intervals.
3. **Properties**:
   - `location`: Contains information about the current URL.
   - `navigator`: Provides information about the browser.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Window Object Example</title>
</head>
<body>
    <script>
        // Displaying an alert box
        window.alert("Welcome to the Workshop!");

        // Logging the current URL
        console.log(window.location.href);

        // Setting a timeout
        window.setTimeout(() => {
            console.log("This message appears after 3 seconds");
        }, 3000);
    </script>
</body>
</html>
```
**Explanation:**
- `alert()` displays a popup message.
- `location.href` retrieves the current page's URL.
- `setTimeout()` schedules a function to run after 3 seconds.

---

## **Working with the Document Object**
The `document` object represents the HTML content of a web page and provides methods to interact with it.

### **Key Methods**
1. `getElementById()`: Selects an element by its ID.
2. `querySelector()`: Selects the first matching element.
3. `createElement()`: Creates a new HTML element.
4. `appendChild()`: Adds a child element to a parent.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Document Object Example</title>
</head>
<body>
    <h1 id="main-header">Hello, World!</h1>
    <script>
        // Accessing an element by ID
        let header = document.getElementById("main-header");
        header.style.color = "blue";

        // Creating and appending a new element
        let newPara = document.createElement("p");
        newPara.textContent = "This is a dynamically added paragraph.";
        document.body.appendChild(newPara);
    </script>
</body>
</html>
```
**Explanation:**
- `getElementById()` is used to modify the `header`'s text color.
- `createElement()` and `appendChild()` are used to dynamically add a paragraph to the document.

---

## **Events in JavaScript**
Events are actions that occur in the browser (e.g., clicks, keypresses).

### **Event Types**
1. `click`: Triggered when an element is clicked.
2. `keypress`: Triggered when a key is pressed.
3. `mouseover`: Triggered when the mouse is over an element.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Events Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <script>
        // Adding an event listener to a button
        let button = document.getElementById("myButton");
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    </script>
</body>
</html>
```
**Explanation:**
- `addEventListener()` is used to attach a `click` event to a button.

---

## **Event Object**
The `event` object provides information about the event and allows interaction with it.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Object Example</title>
</head>
<body>
    <input type="text" id="inputField" placeholder="Type something...">
    <script>
        // Logging event details
        let inputField = document.getElementById("inputField");
        inputField.addEventListener("keypress", (event) => {
            console.log("Key pressed: ", event.key);
            console.log("Key code: ", event.keyCode);
        });
    </script>
</body>
</html>
```
**Explanation:**
- The `event` object contains details about the key pressed, such as `key` and `keyCode`.

---

## **Event Propagation and Event Delegation**
### **Event Propagation**
Determines the order in which events are handled: 
1. **Capturing Phase**: Events move from the root to the target.
2. **Bubbling Phase**: Events move from the target back to the root.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Propagation Example</title>
</head>
<body>
    <div id="outer" style="padding: 20px; background-color: lightblue;">
        Outer Div
        <div id="inner" style="padding: 20px; background-color: lightcoral;">
            Inner Div
        </div>
    </div>
    <script>
        // Capturing and bubbling demonstration
        let outerDiv = document.getElementById("outer");
        let innerDiv = document.getElementById("inner");

        outerDiv.addEventListener("click", () => {
            console.log("Outer Div clicked!");
        }, true); // Capturing phase

        innerDiv.addEventListener("click", () => {
            console.log("Inner Div clicked!");
        }, false); // Bubbling phase
    </script>
</body>
</html>
```
**Explanation:**
- The `true` parameter sets the listener for the capturing phase.
- The `false` parameter (default) sets the listener for the bubbling phase.

### **Event Delegation**
Using a parent element to handle events for its children.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Delegation Example</title>
</head>
<body>
    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <script>
        let list = document.getElementById("list");
        list.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                console.log("List item clicked: ", event.target.textContent);
            }
        });
    </script>
</body>
</html>
```
**Explanation:**
- The event listener on `list` handles clicks on its `LI` children using `event.target`.

---

## **Exception Handling and Error Types**
### **Error Types**
1. **Syntax Error**: Errors in code syntax.
2. **Reference Error**: Accessing an undefined variable.
3. **Type Error**: Performing invalid operations on a type.

### **Throwing and Catching Exceptions**
**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exception Handling Example</title>
</head>
<body>
    <script>
        try {
            let result = 10 / 0;
            if (!isFinite(result)) {
                throw new Error("Division by zero");
            }
        } catch (error) {
            console.log("Error: ", error.message);
        } finally {
            console.log("Execution completed.");
        }
    </script>
</body>
</html>
```
**Explanation:**
- The `try` block contains code that may throw an error.
- The `catch` block handles the error.
- The `finally` block executes regardless of success or failure.

---

## **Error Handling Best Practices**
1. Always validate inputs.
2. Provide descriptive error messages.
3. Avoid exposing sensitive details in errors.
4. Use `try-catch` for critical operations.

---

## **Debugging Tools**
1. **Browser Developer Tools**:
   - Use the `Console` for logging.
   - Use `Breakpoints` for pausing code execution.
2. **Debugging Methods**:
   - `console.log()` to output variable values.
   - `debugger` to pause code execution.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Debugging Example</title>
</head>
<body>
    <script>
        let num = 5;
        console.log("Initial value: ", num);
        num += 10;
        debugger;
        console.log("Updated value: ", num);
    </script>
</body>
</html>
```
**Explanation:**
- `debugger` pauses the execution for step-by-step analysis.

---

## **Asynchronous JavaScript**
### **Callbacks**
**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Callbacks Example</title>
</head>
<body>
    <script>
        function fetchData(callback) {
            setTimeout(() => {
                callback("Data fetched");
            }, 2000);
        }

        fetchData((message) => {
            console.log(message);
        });
    </script>
</body>
</html>
```
**Explanation:**
- `fetchData` simulates a data fetch operation and invokes the callback after 2 seconds.

### **Promises**
**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Promises Example</title>
</head>
<body>
    <script>
        let promise = new Promise((resolve, reject) => {
            let success = true;
            if (success) {
                resolve("Operation successful");
            } else {
                reject("Operation failed");
            }
        });

        promise.then((message) => {
            console.log(message);
        }).catch((error) => {
            console.log(error);
        });
    </script>
</body>
</html>
```
**Explanation:**
- `Promise` handles asynchronous operations with `resolve` and `reject` for success and failure cases.

### **Async/Await**
**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Async/Await Example</title>
</head>
<body>
    <script>
        async function fetchData() {
            let data = await new Promise((resolve) => {
                setTimeout(() => resolve("Fetched data"), 2000);
            });
            console.log(data);
        }
        fetchData();
    </script>
</body>
</html>
```
**Explanation:**
- `async/await` simplifies working with Promises, making the code more readable.
