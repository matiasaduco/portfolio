import './App.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeicons/primeicons.css'
import NavBar from '@/app/NavBar'
import Home from '@/app/Home'
import Experience from '@/app/Experience'
import Knowledge from '@/app/Knowledge'
// import Projects from '@/app/Projects/Projects'
// import Contact from '@/app/Contact/Contact'
import { PrimeReactProvider } from 'primereact/api'

function App() {
  return (
    <PrimeReactProvider>
      <NavBar />
      <div className='w-[75%] mx-auto'>
        <Home />
        <Experience />
        {/* <Projects /> */}
        <Knowledge />
        {/* <Contact /> */}
      </div>
    </PrimeReactProvider>
  )
}

export default App
