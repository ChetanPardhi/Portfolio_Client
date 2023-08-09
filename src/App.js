import './App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import { Routes, Route } from 'react-router-dom';
import Login from './component/auth/Login';
import React, { useState ,useEffect} from "react";


function App() {
  return (
    <>
        {isAuthenticated ? (
          <div>
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
          </div>
        )
        :(
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          )}
    </>
  );
};

export default App;
