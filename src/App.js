import { useState } from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <div className="sections">
       <Intro/>
       <About/>
       <Portfolio />
       <Contact />
     </div>
    </div>
  );
}

export default App;
