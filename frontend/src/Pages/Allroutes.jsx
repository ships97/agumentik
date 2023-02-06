import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Allroutes;
