const Habilities = ({ title, resources }) => {
  return (
    <>
      <section className='subtitle'>{title}</section>
      <section className='flex-wrap habilities'>
        {resources.map((resource, index) => (
          <img src={`${resource}`} alt={`language${index}`} />
        ))}
      </section>
    </>
  );
};

export default Habilities;
