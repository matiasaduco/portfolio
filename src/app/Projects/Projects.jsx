import Project from './Project'
import image1 from '@/assets/images/projects/api-rest.png'
import image2 from '@/assets/images/projects/portfolio-angular.png'
import image3 from '@/assets/images/projects/rotten-tomatoes.png'

const Projects = () => {
  // const [repositories, setRepositories] = useState([{}])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/matiasaduco/repos')
  //     .then((response) => response.json())
  //     .then((json) => setRepositories(json))
  //     .catch((e) => console.log(e))
  // }, [])

  return (
    <section id='projects'>
      <h1 className='text-center text-6xl mb-15'>Proyectos</h1>
      <div className='flex flex-col justify-center items-center gap-10'>
        <Project
          image={image1}
          title='API REST'
          description='API REST creada con Node.js y Express.js para el manejo de usuarios y productos.'
          tecnologies={[
            { label: 'Apple', icon: 'pi pi-apple' },
            { label: 'Facebook', icon: 'pi pi-facebook' },
            { label: 'Google', icon: 'pi pi-google' },
            { label: 'Microsoft', icon: 'pi pi-microsoft' },
          ]}
        />
        <Project
          image={image2}
          title='Portfolio Angular'
          description='Portfolio personal creado con Angular y Tailwind CSS.'
          tecnologies={[
            { label: 'Apple', icon: 'pi pi-apple' },
            { label: 'Facebook', icon: 'pi pi-facebook' },
            { label: 'Google', icon: 'pi pi-google' },
            { label: 'Microsoft', icon: 'pi pi-microsoft' },
          ]}
        />
        <Project
          image={image3}
          title='Rotten Tomatoes'
          description='Aplicación web que consume la API de Rotten Tomatoes para mostrar películas y series.'
          tecnologies={[
            { label: 'Apple', icon: 'pi pi-apple' },
            { label: 'Facebook', icon: 'pi pi-facebook' },
            { label: 'Google', icon: 'pi pi-google' },
            { label: 'Microsoft', icon: 'pi pi-microsoft' },
          ]}
        />
      </div>
    </section>
  )
}

export default Projects
