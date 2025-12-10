import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import SignUp from './pages/SignUp';
import Login from './pages/Login'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
