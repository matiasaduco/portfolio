import frontend from '@/assets/icons/languages/frontend/Frontend'
import backend from '@/assets/icons/languages/backend/Backend'
import tools from '@/assets/icons/languages/tools/Tools'
import { useTranslation } from 'react-i18next'
import { Card } from 'primereact/card'

const Knowledge = () => {
  const { t } = useTranslation()

  const ptClass = {
    root: {
      style: { backgroundColor: 'transparent' },
    },
    title: {
      className:
        'text-transparent bg-radial-[at_0%_100%] from-[#06B6D4]/10 from-10% to-white to-70% bg-clip-text',
      style: { fontSize: '2.1rem' },
    },
    body: {
      className:
        'shadow-lg shadow-black rounded-md bg-radial-[at_0%_100%] from-[#06B6D4]/20 from-10% to-[#171717] to-90%',
    },
  }

  return (
    <section className='py-10' id='knowledge'>
      <h1 className='text-center text-5xl mb-15'>{t('knowledge')}</h1>

      <div className='flex flex-wrap justify-center gap-10'>
        <Card title='Front End' className='w-[400px] text-center' pt={ptClass}>
          <p className='m-0 flex flex-wrap gap-12 items-center'>
            {frontend.map((item, index) => (
              <img
                key={index}
                src={item}
                className='w-[50px] h-[50px] object-contain'
              />
            ))}
          </p>
        </Card>
        <Card title='Back End' className='w-[400px] text-center' pt={ptClass}>
          <p className='m-0 flex flex-wrap gap-12 items-center'>
            {backend.map((item, index) => (
              <img
                key={index}
                src={item}
                className='w-[50px] h-[50px] object-contain'
              />
            ))}
          </p>
        </Card>
        <Card
          title='Herramientas'
          className='w-[400px] text-center'
          pt={ptClass}
        >
          <p className='m-0 flex flex-wrap gap-12 items-center'>
            {tools.map((item, index) => (
              <img
                key={index}
                src={item}
                className='w-[50px] h-[50px] object-contain'
              />
            ))}
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Knowledge
