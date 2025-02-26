import frontend from '@/assets/icons/languages/frontend/Frontend'
import backend from '@/assets/icons/languages/backend/Backend'
import frontendIcon from '@/assets/icons/languages/frontend/frontend.png'
import backendIcon from '@/assets/icons/languages/backend/backend.png'
// import tools from '@/assets/icons/languages/tools/Tools'
import { useTranslation } from 'react-i18next'
import { Card } from 'primereact/card'

const Stack = () => {
  const { t } = useTranslation()

  const ptClass = {
    root: {
      style: {
        backgroundColor: 'rgba(243, 244, 246, 0.03)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
      },
    },
    header: {
      className: 'w-[10rem] mx-auto',
    },
    title: {
      style: {
        fontSize: '3rem',
        color: 'white',
      },
    },
  }

  const cards = [
    { title: 'Front End', icon: frontendIcon, tecnologies: frontend },
    { title: 'Back End', icon: backendIcon, tecnologies: backend },
  ]

  return (
    <section id='stack' className='py-10'>
      <h1 className='text-center mb-15'>{t('stack')}</h1>

      <div className='flex justify-center gap-8'>
        {cards.map((card, index) => (
          <Card
            key={index}
            header={<img src={card.icon} />}
            title={card.title}
            className='text-center max-w-[50%]'
            pt={ptClass}
          >
            <p className='mt-4 flex flex-wrap gap-12 justify-center'>
              {card.tecnologies.map((tecnology, index) => (
                <img
                  key={index}
                  src={tecnology}
                  className='w-[70px] h-[70px] object-contain'
                />
              ))}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Stack
