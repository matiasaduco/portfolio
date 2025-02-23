import './contact.css';

// import github from '../../assets/icons/social/github.png';
// import gmail from '../../assets/icons/social/gmail.png';
// import linkedin from '../../assets/icons/social/linkedin.png';

import html from '../../assets/icons/languages/frontend/html5.png';
import css from '../../assets/icons/languages/frontend/css3.png';
import javascript from '../../assets/icons/languages/frontend/javascript.png';
import react from '../../assets/icons/languages/frontend/react.png';

const Contact = () => {
  return (
    <footer id='contact'>
      <div className='social-network'>
        <a
          href='https://github.com/matiasaduco?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <img src={github} alt='red1' />
          <span>github.com/matiasaduco</span>
        </a>
        <a href='mailto:matias.aduco@gmail.com'>
          <img src={gmail} alt='red2' />
          <span>matias.aduco@gmail.com</span>
        </a>
        <a
          href='https://www.linkedin.com/in/matias-aduco/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedin} alt='red3' />
          <span>linkedin.com/in/matias-aduco</span>
        </a>
      </div>
      <div className='used-tecnology'>
        <section>Tecnología Usada</section>
        <img src={html} alt='used1' />
        <img src={css} alt='used2' />
        <img src={javascript} alt='used3' />
        <img src={react} alt='used4' />
      </div>
    </footer>
  );
};

export default Contact;
