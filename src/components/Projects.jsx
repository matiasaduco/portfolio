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
        {/* <ProjectCard
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
        /> */}
      </section>
    </div>
  );
};

export default Projects;
