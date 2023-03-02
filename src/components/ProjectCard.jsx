const ProjectCard = ({ img, title, description, link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='card'>
      <section>
        <img src={img} alt='project1' />
      </section>
      <b>{title}</b>
      <i>{description}</i>
    </a>
  );
};

export default ProjectCard;
