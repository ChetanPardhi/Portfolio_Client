import './App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import { Routes, Route } from 'react-router-dom';
import Login from './component/auth/Login';
import React, { useState ,useEffect} from "react";
import PrivateRoutes from './component/privateRouts';


const App = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(()=>{
    if(sessionStorage.getItem("email")!==null){
      setIsAuthenticated(true);
    }
  },[])
  return (
    <>
    <Routes>
        
    <Route
              element={
                <>
                  
                  <PrivateRoutes />
                </>
              }
            >
              <Route path="/" element={<Hero />} />
          
          
          </Route>
            
          <Route path="/login" element={<Login />} />
          </Routes>
    </>
  );
}

export default App;
