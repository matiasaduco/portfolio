import "../styles/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <img src="#" alt="Foto de Perfil" />
      <div className="container">
        <h1 className="name">Matías González Aduco</h1>
        <div className="info">
          <span>
            <b>Fecha de Nacimiento</b>
            <br />
            <i>26/10/1996</i>
          </span>
          <span>
            <b>Formación Académica</b>
            <br />
            <i>Universidad Nacional de Quilmes - Estudiando</i>
          </span>
          <span>
            <b>Ubicación</b>
            <br />
            <i>Buenos Aires, Argentina</i>
          </span>
          <span>
            <b>Idiomas</b>
            <br />
            <i>Inglés - Intermedio</i>
          </span>
        </div>
        <button className="button">Descargar CV</button>
      </div>
    </div>
  );
};

export default AboutMe;
