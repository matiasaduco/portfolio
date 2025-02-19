import './aboutMe.css'
import perfil from '@/assets/images/perfil.jpg'
// import github from '@/assets/images/github.png'
// import linkedin from '@/assets/images/linkedin.png'
import cv from '@/assets/downloads/CV_2023022817213428.pdf'

const AboutMe = () => {
  return (
    <div id='inicio' className='container-fluid w-50 vh-100 d-flex'>
      <div className='row gap-5 justify-content-center align-items-center'>
        <img className='profile col-3' src={perfil} alt='Foto de Perfil' />
        <div className='col-8 row gap-3 justify-content-center'>
          <div className='biography col-12'>
            Hola, soy <strong>Matías Aduco</strong>
            <br />
            Desarrollador Full Stack
            <br />
            Me encuentro cursando la carrera de Licenciatura en Informática,
            también soy Docente Auxiliar Universitario en la UNQui. Actualmente
            me encuentro en búsqueda de un trabajo como desarrollador. Pueden
            descargar mi Curriculum justo aquí debajo. Mis redes se encuentran
            al pie de la página!
          </div>
          <div className='row gap-2 col-12'>
            <a
              href={cv}
              download='Matias Gonzalez Aduco.pdf'
              className='btn btn-outline-primary rounded-pill col-2'
            >
              Descargar CV
            </a>
            <button
              className='btn btn-outline-primary rounded-pill col-2'
              type='submit'
            >
              GitHub
            </button>
            <button
              className='btn btn-outline-primary rounded-pill col-2'
              type='submit'
            >
              Linkedin
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
