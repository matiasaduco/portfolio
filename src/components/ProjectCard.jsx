import video from '../D.mp4';

const ProjectCard = ({ img, title, description }) => {
  return (
    <a href='#projectdd' className='card'>
      <section>
        {/* <video autoPlay loop muted width='320' height='240'>
          <source src={video} type='video/mp4' />
        </video> */}
        <img src={img} alt='project1' />
      </section>
      <b>{title}</b>
      <i>{description}</i>
    </a>
  );
};

export default ProjectCard;
