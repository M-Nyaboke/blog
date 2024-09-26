
import './App.css';
import Register from "./pages/Register/Register";
import Home from "./pages/home/Home";
import Topbar from "./Components/topbar/Topbar";
import Login from "./pages/Login/Login";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

import { Routes, Route } from "react-router-dom";

function App() {  
  return (
    <div className="App">
      <Topbar />
      <Routes>        
        <Route path="/" element={<Home />}/>       
        <Route path="/Login" element={< Login />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Single" element={<Single />} />
        <Route path="/Write" element={<Write /> } />
        <Route path="/Register" element={<Register />} />
      </Routes>      
    </div>
  );
}

export default App;
