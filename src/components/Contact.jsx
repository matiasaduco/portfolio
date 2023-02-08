import '../styles/contact.css';

import github from '../assets/icons/tools/github.png';
import gmail from '../assets/icons/gmail.png';
import linkedin from '../assets/icons/linkedin.png';

import html from '../assets/icons/languages/html.png';
import css from '../assets/icons/languages/css.png';
import javascript from '../assets/icons/languages/javascript.jpg';
import react from '../assets/icons/tools/react.png';

const Contact = () => {
  return (
    <footer id='contact'>
      <div>
        <a
          href='https://github.com/matiasaduco?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <img src={github} alt='red1' />
        </a>
        <a href='mailto:matias.aduco@gmail.com.com'>
          <img src={gmail} alt='red2' />
        </a>
        <a
          href='https://www.linkedin.com/in/matias-gonzalez-b516b021b/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedin} alt='red3' />
        </a>
      </div>
      <div>
        <section style={{ color: 'grey' }}>Tecnología Usada</section>
        <img src={html} alt='used1' />
        <img src={css} alt='used2' />
        <img src={javascript} alt='used3' />
        <img src={react} alt='used4' />
      </div>
    </footer>
  );
};

export default Contact;
