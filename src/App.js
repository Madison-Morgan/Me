import { useState } from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Employment from './components/Employment/Employment';


function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="App">
      <div className="sections">
       <Intro/>
       <About/>
       <Employment />
     </div>
     <Navigation/>
    </div>
  );
}

export default App;
