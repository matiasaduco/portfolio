import '../styles/aboutMe.css';
import perfil from '../assets/images/perfil.jpg';
import blankPerfil from '../assets/images/blank-perfil.png';
import cv from '../assets/downloads/CV_2023021419512713.pdf';

const AboutMe = () => {
  return (
    <div className='aboutMe' id='inicio'>
      <img src={blankPerfil} alt='Foto de Perfil' />
      <span className='flex-wrap details'>
        <h1 className='name'>Matías González Aduco</h1>
        <div className='flex-wrap info'>
          <span>
            <b>Fecha de Nacimiento</b>
            <br />
            <i>26/10/1996</i>
          </span>
          <span>
            <b>Formación Académica</b>
            <br />
            <i>Universidad Nacional de Quilmes - Estudiando</i>
          </span>
          <span>
            <b>Ubicación</b>
            <br />
            <i>Buenos Aires, Argentina</i>
          </span>
          <span>
            <b>Idiomas</b>
            <br />
            <i>Inglés - Intermedio</i>
          </span>
        </div>
        <a href={cv} download='cv.pdf'>
          <button className='button'>Descargar CV</button>
        </a>
      </span>
    </div>
  );
};

export default AboutMe;
