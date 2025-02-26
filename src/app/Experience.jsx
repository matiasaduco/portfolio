import { useTranslation } from 'react-i18next'
import { Card } from 'primereact/card'

const Experience = () => {
  const { t } = useTranslation()

  const ptClass = {
    root: {
      style: {
        backgroundColor: 'rgba(243, 244, 246, 0.03)',
        backdropFilter: 'blur(10px)',
      },
    },
    title: {
      className:
        'text-transparent bg-linear-to-r from-[#06B6D4] to-white bg-clip-text',
      style: {
        fontSize: '2.1rem',
      },
    },
    body: {
      className: 'text-white',
    },
  }

  const events = [
    {
      status: 'Cambá',
      date: `${t('july')} 2023 - ${t('present')}`,
      description: t('experience.camba'),
    },
    {
      status: 'Rwilde S.A.',
      date: 'Febrero 2023 - Julio 2023',
      description: t('experience.rwilde'),
    },
    {
      status: 'Universidad Nacional de Quilmes',
      date: 'Marzo 2022 - Julio 2023',
      description: t('experience.unqui'),
    },
  ]

  return (
    <section id='experience' className='py-10'>
      <h1 className='text-center mb-10'>{t('experience.title')}</h1>

      <div className='flex flex-wrap gap-4'>
        {events.map((item, index) => (
          <Card
            key={index}
            title={item.status}
            subTitle={item.date}
            className='w-[40%] grow'
            pt={ptClass}
          >
            <p className='text-xl'>{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Experience
