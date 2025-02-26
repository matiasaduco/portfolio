import ProjectCard from './ProjectCard'
import image1 from '@/assets/images/projects/api-rest.png'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <section id='projects' className='py-10'>
      <h1 className='text-center mb-10'>{t('projects')}</h1>

      <div className='flex flex-col justify-center items-center gap-10'>
        <ProjectCard
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
      </div>
    </section>
  )
}

export default Projects
