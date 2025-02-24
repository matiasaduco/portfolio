import './App.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeicons/primeicons.css'
import NavBar from '@/app/NavBar'
import AboutMe from '@/app/AboutMe/AboutMe'
import Experience from '@/app/Experience'
// import Skills from '@/app/Skills/Skills'
// import Projects from '@/app/Projects/Projects'
// import Contact from '@/app/Contact/Contact'
import { PrimeReactProvider } from 'primereact/api'

function App() {
  return (
    <PrimeReactProvider>
      <NavBar />
      <AboutMe />
      <Experience />
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
    </PrimeReactProvider>
  )
}

export default App
