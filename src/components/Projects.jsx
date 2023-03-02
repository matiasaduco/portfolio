import '../styles/projects.css';
import ProjectCard from './ProjectCard';

import project_dd from '../assets/images/projects/project-dd.jpg';
import api_rest from '../assets/images/projects/api-rest.png';
import rotten_tomatoes from '../assets/images/projects/rotten-tomatoes.png';
import no_lo_testeamos from '../assets/images/projects/no-lo-testeamos.png';

// const description1 =
//   'Es una página sobre D&D. Se pueden descargar manuales, campañas e incluso crear tus propios personajes.';
const description1 =
  'Adaptación para celular del juego de cartas del mismo nombre. Incluye alguna de las expansiones.';
const description2 =
  'En este link podrán ver mi proyecto de API REST desarrollado para la materia de Construcción de Interfaces de Usuario.';
const description3 =
  'Es una imitación de la famosa página Rotten Tomatoes, hecha para un proyecto de una materia de la UNQui.';

const Projects = () => {
  return (
    <div className='project' id='projects'>
      <section className='title'>Proyectos</section>
      <section className='selection-project'>
        {/* <ProjectCard
          img={project_dd}
          title='Project D&D'
          description={description1}
          link='https://github.com/matiasaduco/project-dd'
        /> */}
        <ProjectCard
          img={no_lo_testeamos}
          title='No Lo Testeamos Ni Un Poco'
          description={description1}
          link='https://github.com/matiasaduco/nltnup-app'
        />
        <ProjectCard
          img={api_rest}
          title='API'
          description={description2}
          link='https://github.com/matiasaduco/rotten-tomatoes/tree/main/Api'
        />
        <ProjectCard
          img={rotten_tomatoes}
          title='Rotten Tomatoes'
          description={description3}
          link='https://github.com/matiasaduco/rotten-tomatoes/tree/main/Web/rotten-tomatoes'
        />
      </section>
    </div>
  );
};

export default Projects;
