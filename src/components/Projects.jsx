import '../styles/projects.css';
import ProjectCard from './ProjectCard';
import { useState, useEffect } from 'react';
import projects from '../assets/images/projects/Projects';

const Projects = () => {
  const [repositories, setRepositories] = useState([{}]);

  useEffect(() => {
    fetch('https://api.github.com/users/matiasaduco/repos')
      .then((response) => response.json())
      .then((json) => setRepositories(json))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className='project' id='projects'>
      <section className='title'>Proyectos</section>
      <section className='selection-project'>
        {repositories.map((repositorie) => (
          <ProjectCard
            img={
              projects.find((project) => project.name == repositorie.name)
                ?.resource
            }
            title={repositorie.name}
            description={repositorie.description}
            link={repositorie.html_url}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
