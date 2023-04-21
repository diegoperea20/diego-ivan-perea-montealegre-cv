import Myself from "./Myself";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact'
import "./index.css";

function App() {
  return(
  <section className="home">
  <Navbar />
  <Myself />
  <Skills/>
  <Projects/>
  <Education/>
  <Contact/>
  </section>
  
  ) 
}

export default App;
