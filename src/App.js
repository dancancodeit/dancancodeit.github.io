import './App.css';
import Hero from './containers/Hero'
// import Blog  from './containers/Blog'
// import Youtube from './containers/Youtube'
import Particles from "react-tsparticles";
import config from './resources/particles.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Particles options={config} canvasClassName="particles-canvas" className='particles' style={{zIndex: '-1'}}/>
        <Hero/>
      </header>
    </div>
  );
}

export default App;
