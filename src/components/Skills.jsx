import '../styles/skills.css';
import Habilities from './Habilities';
import languages from '../assets/icons/languages/Languages';
import tools from '../assets/icons/tools/Tools';

const Skills = () => {
  return (
    <div className='skills'>
      <section className='title'>Skills</section>
      <Habilities title='Lenguajes' resources={languages} />
      <br />
      <Habilities title='Herramientas' resources={tools} />
    </div>
  );
};

export default Skills;
