import { Route, Routes } from "react-router-dom";
import "tw-elements";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/admin-panel"
          element={
            <RequireAuth>
              <AdminPanel></AdminPanel>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
