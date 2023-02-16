const ProjectCard = ({ img, title, description }) => {
  return (
    <a href='#projectdd' className='card'>
      <section style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <img src={img} alt='project1' />
      </section>
      <b>{title}</b>
      <i>{description}</i>
    </a>
  );
};

export default ProjectCard;
