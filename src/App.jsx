import './App.css';
import NavBar from './app/NavBar/NavBar';
import AboutMe from './app/AboutMe/AboutMe';
import Skills from './app/Skills/Skills';
import Projects from './app/Projects/Projects';
import Contact from './app/Contact/Contact';
import Datos from './app/Datos/Datos';

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
