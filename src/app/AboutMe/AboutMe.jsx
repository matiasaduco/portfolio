import './aboutMe.css'
import perfil from '@/assets/images/perfil.jpg'
// import github from '@/assets/images/github.png'
// import linkedin from '@/assets/images/linkedin.png'
import cv from '@/assets/downloads/CV_2023022817213428.pdf'
import { Button } from 'primereact/button'
import ReactParticles from '../../components/ReactParticles'

const AboutMe = () => {
  return (
    <div
      id='inicio'
      className='flex md:flex-col lg:flex-row h-screen justify-center items-center gap-12'
      style={{ width: '75%', margin: 'auto' }}
    >
      <ReactParticles />
      <img className='profile w-100' src={perfil} alt='Foto de Perfil' />
      <div className='flex flex-col gap-4'>
        <div className='biography'>
          Hola, soy <strong>Matías Aduco</strong>
          <br />
          Desarrollador Full Stack
          <br />
          Me encuentro cursando la carrera de Licenciatura en Informática,
          también soy Docente Auxiliar Universitario en la UNQui. Actualmente me
          encuentro en búsqueda de un trabajo como desarrollador. Pueden
          descargar mi Curriculum justo aquí debajo. Mis redes se encuentran al
          pie de la página!
        </div>
        <div className='flex gap-4 md:justify-center lg:justify-start'>
          <a
            href={cv}
            download='Matias Gonzalez Aduco.pdf'
            className='p-button font-bold p-button-rounded p-button-outlined'
          >
            Descargar CV
          </a>
          <Button label='GitHub' icon='pi pi-github' rounded outlined />
          <Button label='Linkedin' icon='pi pi-linkedin' rounded outlined />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
