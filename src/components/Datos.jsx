import '../styles/datos.css';
import Card from './Card';

const Datos = () => {
  const info = [
    {
      title: 'Experiencia Profesional',
      atributes: [
        'Rwilde S.A. (2015 - 2022)',
        'Universidad Nacional de Quilmes (2022 - Presente)',
      ],
    },
    {
      title: 'Formación Académica',
      atributes: ['Universidad Nacional de Quilmes - Estudiando'],
    },
    {
      title: 'Ubicación',
      atributes: ['Wilde, Avellaneda'],
    },
    {
      title: 'Teléfono',
      atributes: ['11-5814-5732'],
    },
    {
      title: 'Idiomas',
      atributes: ['Inglés - Intermedio'],
    },
    {
      title: 'Fecha de Nacimiento',
      atributes: ['26/10/1996'],
    },
  ];
  return (
    <>
      <section className='title' id='datos'>
        Información
      </section>
      <div className='flex-wrap info'>
        {info.map((data) => (
          <Card title={data.title} atributes={data.atributes} />
        ))}
      </div>
    </>
  );
};

export default Datos;
