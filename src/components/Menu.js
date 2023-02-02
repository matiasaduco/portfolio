import "../styles/navbar.css";

const Menu = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="inicio">Inicio</a>
        <a href="skills">Skills</a>
        <a href="proyectos">Proyectos</a>
        <a href="contacto">Contácto</a>
      </nav>
    </header>
  );
};

export default Menu;
