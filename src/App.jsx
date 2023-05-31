import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Datos from './components/Datos/Datos';

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
