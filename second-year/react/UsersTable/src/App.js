import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RandomUsersTable, { Footer, Header } from "./page/RandomUsersTable/RandomUsersTable";
import About from "./page/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RandomUsersTable />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
