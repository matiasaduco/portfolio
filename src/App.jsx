import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Datos from './components/Datos';

function App() {
  return (
    <>
      <AboutMe />
      <NavBar />
      <Datos />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
