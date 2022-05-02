import '../style.css'
import '../App.css';
import '../index.css'

import Hero from './index.js'
import Particles from "react-tsparticles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Particles url="/particles.json" canvasClassName="particles-canvas" className='particles' style={{zIndex: '-1'}}/>
        <Hero/>
      </header>
    </div>
  );
}

export default App;
