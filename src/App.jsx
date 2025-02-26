import './App.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeicons/primeicons.css'
import NavBar from '@/app/NavBar'
import Home from '@/app/Home'
import Experience from '@/app/Experience'
import Stack from '@/app/Stack'
// import Projects from '@/app/Projects/Projects'
// import AboutMe from '@/app/AboutMe'
import { PrimeReactProvider } from 'primereact/api'
import Background from '@/components/background/Background'

function App() {
  return (
    <PrimeReactProvider>
      <Background />
      <NavBar />
      <div className='w-[70%] mx-auto'>
        <Home />
        <Experience />
        {/* <Projects /> */}
        <Stack />
        {/* <AboutMe /> */}
      </div>
    </PrimeReactProvider>
  )
}

export default App
