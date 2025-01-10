# **React Workshop: Setting Up and Managing a Create-React-App Project**

## **1. Setting Up Create-React-App**

Create-React-App (CRA) is a boilerplate to quickly scaffold a React application with zero configuration.

### **Steps to Set Up CRA**

1. **Install Node.js**: Ensure you have Node.js installed.

   ```bash
   node -v   # Check Node.js version
   npm -v    # Check npm version
   ```

2. **Initialize CRA**:
   ```bash
   npx create-react-app my-app
   cd my-app
   npm start
   ```
   This initializes a new React app in the `my-app` folder and starts a local development server.

**Example**:

- Run `npm start` to start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view your app.

**Explanation**:

- `npx` runs CRA without globally installing it.
- `npm start` runs the development server.

---

## **2. Project Structure and Configuration**

CRA provides a default project structure that is clean and manageable.

### **Key Folders and Files**

1. **`public/`**:

   - Contains `index.html` which is the root HTML file.
   - Static assets (e.g., images, favicons) are stored here.

2. **`src/`**:

   - Contains React components, styles, and logic.
   - Default files:
     - `App.js`: Main app component.
     - `index.js`: Entry point for React DOM rendering.

3. **`package.json`**:
   - Manages dependencies, scripts, and metadata.

**Example**:

- Modify `src/App.js` to display a custom message:

  ```javascript
  function App() {
    return (
      <div>
        <h1>Welcome to My React App</h1>
        <p>This is a simple demo app.</p>
      </div>
    );
  }

  export default App;
  ```

**Explanation**:

- The `App` component is the core UI component rendered in `index.js`.

---

## **3. Development Workflow**

Efficient development involves using CRA’s built-in features and workflows.

### **Hot Module Reloading (HMR)**

- Saves changes and reflects them in the browser without a full page reload.

**Example**:

- Edit `App.js` and observe real-time updates in the browser.

### **Debugging**

1. Use the **React Developer Tools** extension.
2. Add `console.log` statements in components to log runtime information.

**Explanation**:

- HMR improves productivity, and React DevTools help inspect component hierarchies.

---

## **4. `package.json` and npm Scripts**

The `package.json` file is crucial for managing dependencies and scripts.

### **Key Sections**:

1. **`dependencies`**:

   - Lists libraries required for production.

2. **`scripts`**:
   - `start`: Starts the development server.
   - `build`: Builds the app for production.
   - `test`: Runs unit tests.

**Example**:

- Add a custom script to clean the `build` directory:
  ```json
  "scripts": {
    "clean": "rm -rf build"
  }
  ```
- Run it using:
  ```bash
  npm run clean
  ```

**Explanation**:

- Custom scripts automate tasks like cleaning up the build folder.

---

## **5. Adding and Using Third-Party Packages**

### **Installing Packages**

Use npm or yarn to install packages:

```bash
npm install axios
```

### **Using Installed Packages**

- Example: Fetch data using `axios`:

  ```javascript
  import axios from "axios";

  function App() {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10"
      );
      console.log(response.data);
    };

    return (
      <div>
        <h1>Data Fetch Example</h1>
        <button onClick={fetchData}>Fetch Data</button>
      </div>
    );
  }

  export default App;
  ```

**Explanation**:

- Third-party packages like `axios` simplify tasks such as API calls.

---

## **6. Environment Variables**

CRA supports environment variables for configuration.

### **Creating Variables**

1. Create a `.env` file in the root.
2. Prefix variables with `REACT_APP_`:
   ```env
   REACT_APP_API_URL=https://api.example.com
   ```

### **Using Variables**

```javascript
console.log(process.env.REACT_APP_API_URL);
```

**Explanation**:

- Environment variables are useful for storing sensitive data or configuration settings.

---

## **7. Updating Create-React-App**

CRA updates frequently to improve features and fix bugs.

### **Steps to Update**

1. Update the `react-scripts` package:

   ```bash
   npm install react-scripts@latest
   ```

2. Test the app for compatibility.

**Explanation**:

- Regular updates ensure compatibility with the latest React version and best practices.

---

## **Workshop Practical Examples**

### **HTML and Script Examples**

#### Example 1: Adding Components

1. **Modify `App.js`**:

   ```javascript
   import React from "react";

   function Header() {
     return <h1>This is the Header Component</h1>;
   }

   function App() {
     return (
       <div>
         <Header />
         <p>Welcome to the main app.</p>
       </div>
     );
   }

   export default App;
   ```

2. **Explanation**:
   - Demonstrates modular components to build a scalable app structure.

---

#### Example 2: Dynamic Styling

1. **Modify `App.js`**:

   ```javascript
   import React, { useState } from "react";

   function App() {
     const [isDark, setIsDark] = useState(false);

     const toggleTheme = () => setIsDark(!isDark);

     return (
       <div
         style={{
           backgroundColor: isDark ? "black" : "white",
           color: isDark ? "white" : "black",
         }}
       >
         <h1>Theme Switcher</h1>
         <button onClick={toggleTheme}>Toggle Theme</button>
       </div>
     );
   }

   export default App;
   ```

2. **Explanation**:
   - Demonstrates dynamic state and inline styling in React.

If time persists take one small example like render reponse in table format - https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10 

So that in next lec they can relate when we explain them.