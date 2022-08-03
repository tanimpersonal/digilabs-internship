import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
      </Routes>
    </>
  );
}

export default App;
