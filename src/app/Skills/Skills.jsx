import './skills.css';
import Habilities from './Habilities/Habilities';
import frontend from '../../assets/icons/languages/frontend/Frontend';
import backend from '../../assets/icons/languages/backend/Backend';
import tools from '../../assets/icons/languages/tools/Tools';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <section className='title'>Habilidades</section>
      <Habilities title='Frontend' resources={frontend} />
      <br />
      <Habilities title='Backend' resources={backend} />
      <br />
      <Habilities title='Conocimientos' resources={tools} />
    </div>
  );
};

export default Skills;
