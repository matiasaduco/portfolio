import './aboutMe.css';
import perfil from '../../assets/images/perfil.jpg';
import cv from '../../assets/downloads/CV_2023022817213428.pdf';

const AboutMe = () => {
  return (
    <div className='aboutMe' id='inicio'>
      <img src={perfil} alt='Foto de Perfil' />
      <span className='flex-wrap details'>
        <h1 className='name'>Matías González Aduco</h1>
        <div className='biography'>
          Hola, soy Matías Aduco! Soy programador Junior Full Stack. Aún me
          encuentro cursando la carrera de Licenciatura en Informática, también
          soy Docente Auxiliar Universitario en la UNQui. Actualmente me
          encuentro en búsqueda de un trabajo como desarrollador. Pueden
          descargar mi Curriculum justo aquí debajo. Mis redes se encuentran al
          pie de la página!
        </div>
        <a href={cv} download='Matias Gonzalez Aduco.pdf'>
          <button className='button'>Descargar CV</button>
        </a>
      </span>
    </div>
  );
};

export default AboutMe;
