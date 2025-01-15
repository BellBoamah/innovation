import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';
import React, { useState } from "react";
import Registration from './components/Register/Registration';
import Sign from './components/Register/Sign';
import Idea from './components/Register/Idea';






function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/register" element={<Registration/>}/>
          <Route exact path='/sign' element={<Sign/>}/>
          <Route path="/idea" element={<Idea/>} />




      
        </Routes>

        

      </BrowserRouter>
      
      
    </div>
  );
}



export default App;
