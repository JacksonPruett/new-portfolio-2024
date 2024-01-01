import React from 'react';
import './App.css';
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Projects"
import Contact from "./routes/Contact"
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
} 
export default App;
