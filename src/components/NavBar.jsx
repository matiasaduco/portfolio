import '../styles/navbar.css';

const Menu = () => {
  return (
    <header>
      <nav className='navbar'>
        <ul className='menu'>
          <li id='selected'>
            <a href='#inicio'>Inicio</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Proyectos</a>
          </li>
          <li>
            <a href='#contact'>Contácto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
