import { useState } from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="App">
      <div className="sections">
       <Intro/>
       <About/>
       <Portfolio />
     </div>
     <Navigation/>
    </div>
  );
}

export default App;
