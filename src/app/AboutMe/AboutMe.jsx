import './aboutMe.css'
import perfil from '@/assets/images/perfil.jpg'
// import github from '@/assets/images/github.png'
// import linkedin from '@/assets/images/linkedin.png'
import cv from '@/assets/downloads/CV_2023022817213428.pdf'
import { Button } from 'primereact/button'
import ReactParticles from '@/components/ReactParticles'

const AboutMe = () => {
  return (
    <div
      id='inicio'
      className='flex md:flex-col lg:flex-row h-screen justify-center items-center gap-12'
      style={{ width: '75%', margin: 'auto' }}
    >
      <ReactParticles />
      <img
        className='profile w-100 z-1 drop-shadow-[0_0_10px_#06B6D4]'
        src={perfil}
        alt='Foto de Perfil'
      />
      <div className='flex flex-col gap-4'>
        <div className='biography'>
          Hola, soy{' '}
          <strong className='bg-gradient-to-r from-[#06B6D4] to-white bg-clip-text text-transparent'>
            Matías Aduco
          </strong>
          <p className='font-bold mb-1 text-[#32dbbc]'>
            Desarrollador Full Stack
          </p>
          Tengo <b className='text-[#bd98d8]'>+2 años de experiencia</b>{' '}
          en el desarrollo de aplicaciones web. Me especializo con tecnologías
          como{' '}
          <b className='text-[#eee8a9]'>
            React, Vue, Node.js, Express y SQL
          </b>
          . Me encanta aprender cosas nuevas y siempre estoy en la búsqueda de
          nuevos desafíos.
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
