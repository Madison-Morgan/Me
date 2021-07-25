import { useState } from 'react';
import './App.css';
import Intro from './components/Intro/Intro'
import About from './components/About/About'


function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="App">
      <div className="sections">
       <Intro/>
       <About/>
     </div>
    </div>
  );
}

export default App;
