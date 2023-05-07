import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio/Portfolio";
import { arr } from "./arr";

function App() {
  return (
    <div className="App">
      <Routes>
        {
          arr?.map((item, index) => (
            <Route path={item.route} element={<Portfolio arr={item} />} />
          ))
        }
        {/* This route is only because i want a default route if you have more then one you can only have one default route */}
        <Route path="/" element={<Portfolio arr={arr[0]} />} />
        <Route
          path="*"
          element={<h1 style={{
            height: '100vh',
            color: "red",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>This page doesn't exist</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
