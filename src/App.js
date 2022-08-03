import { Route, Routes } from "react-router-dom";
import "tw-elements";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/admin-panel" element={<AdminPanel></AdminPanel>}></Route>
      </Routes>
    </>
  );
}

export default App;
