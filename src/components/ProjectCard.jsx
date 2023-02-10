const ProjectCard = ({ img, title, description }) => {
  return (
    <span>
      <section>
        <img src={img} alt='project1' />
      </section>
      <b>{title}</b>
      <i>{description}</i>
    </span>
  );
};

export default ProjectCard;
