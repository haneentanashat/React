import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (

    <BrowserRouter>
        < Nav />
      <Routes>

        <Route path="/Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
