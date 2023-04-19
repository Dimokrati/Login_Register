import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./scenes/login/login";
import Register from "./scenes/register/register";
import Home from "./scenes/home/home";



function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
