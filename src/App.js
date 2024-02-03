import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/auth/Login";
import Feed from "./component/feed/Feed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
