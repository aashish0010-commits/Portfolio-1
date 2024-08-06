import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
// Import other components similarly

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/portfolio"element={<Portfolio/>}/>  
      <Route path="/blog" element={<Blog/>}/>    
      <Route path="/contact" element={<Contact/>}/>
      {/* Define other routes similarly */}
    </Routes>
  );
}

export default App;
