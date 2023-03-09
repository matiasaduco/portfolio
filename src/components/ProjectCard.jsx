import image_not_found from '../assets/images/projects/image-not-found.png';

const ProjectCard = ({ img, title, description, link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='card'>
      <section>
        <img src={img ? img : image_not_found} alt='project1' />
      </section>
      <b>{title}</b>
      <i>{description}</i>
    </a>
  );
};

export default ProjectCard;
