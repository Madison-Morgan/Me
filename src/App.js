import { useState } from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="App">
      <Navigation/>
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
