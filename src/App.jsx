import Myself from "./Myself";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact'
import Experience from "./Experience";
import Certificates from "./Certificates";
import "./index.css";

function App() {
  return(
  <section className="home">
  <Navbar />
  <Myself />
  <Experience/>
  <Skills/>
  <Projects/>
  <Education/>
  <Certificates/>
  <Contact/>
  </section>
  
  ) 
}

export default App;
