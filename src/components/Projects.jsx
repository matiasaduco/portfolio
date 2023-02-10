import '../styles/projects.css';
import ProjectCard from './ProjectCard';
import projectdd from '../assets/images/project-dd.jpg';

const description =
  'Es una página sobre D&D. Se pueden descargar manuales, campañas e incluso crear tus propios personajes.';

const Projects = () => {
  return (
    <div className='project' id='projects'>
      <section className='title'>Proyectos</section>
      <section className='selection-project'>
        <ProjectCard
          img={projectdd}
          title='Project D&D'
          description={description}
        />
      </section>
    </div>
  );
};

export default Projects;
