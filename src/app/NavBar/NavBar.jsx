const Menu = () => {
  return (
    <header
      className='fixed top-0'
      style={{
        width: '100%',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
      }}
    >
      <nav className='flex justify-center gap-3'>
        <a href='#inicio' className='p-button p-button-text'>
          Proyectos
        </a>
        <a href='#datos' className='p-button p-button-text'>
          Experiencia
        </a>
      </nav>
    </header>
  )
}

export default Menu
