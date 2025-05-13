
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import StarsCanvas from './Components/canvas/Stars';



function App() {
  return (
    <div >
      <Hero></Hero>
      <Navbar></Navbar>

      <About></About>
      <Projects></Projects>
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>



    </div>
  );
}

export default App;


