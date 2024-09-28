import "./App.css";

import { Routes, Route } from "react-router-dom";
import Task from "./components/Task/Task";

import Update from "./components/Task/Update";
import Page_not_Found from "./pages/Page_not_Found";
import Register from "./pages/Auth/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Auth/Login";
import Add from "./components/Task/Add";

function App() {
  return (
    <div className="App">
     
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/task" element={<Task />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>

        <Route path="/*" element={<Page_not_Found />}></Route>
      </Routes>
    </div>
  );
}

export default App;
