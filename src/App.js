import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
//import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
//import AppTodo from "./App.Todo"

function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;