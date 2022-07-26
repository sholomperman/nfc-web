import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profolio from "./profolio/Profolio";
import { arr } from "./arr";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sholomperman" element={<Profolio arr={arr[0]} />} />
        <Route path="/tenny" element={<Profolio arr={arr[1]} />} />
        <Route path="/" element={<Profolio arr={arr[0]} />} />
        <Route
          path="*"
          element={<h1 style={{ color: "white" }}>this page dousn't exist</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
