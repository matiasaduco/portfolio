import { useState } from 'react'
import i18n from '@/utils/i18n'
import { useTranslation } from 'react-i18next'
import spain from '@/assets/icons/spain.svg'
import uk from '@/assets/icons/uk.svg'
import { ButtonGroup } from 'primereact/buttongroup'
import { Button } from 'primereact/button'

const Menu = () => {
  const { t } = useTranslation()
  const [language, setLanguage] = useState('es')
  const languages = [
    { label: 'Español', value: 'es', image: spain },
    { label: 'English', value: 'en', image: uk },
  ]

  const changeLanguage = (value) => {
    i18n.changeLanguage(value)
    setLanguage(value)
  }

  return (
    <header
      className='fixed top-0 z-2 p-2'
      style={{
        width: '100%',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
      }}
    >
      <nav className='flex justify-center gap-3'>
        <a href='#experiencia' className='p-button p-button-text'>
          {t('experience.title')}
        </a>
        <a href='#projects' className='p-button p-button-text'>
          {t('projects')}
        </a>
        <div className='self-center absolute right-[2rem]'>
          <ButtonGroup>
            {languages.map((lang) => (
              <Button
                onClick={() => changeLanguage(lang.value)}
                style={{ padding: '0' }}
              >
                <img
                  src={lang.image}
                  className={`object-cover w-[60px] h-[30px] ${
                    lang.value === language ? 'grayscale-[0]' : 'grayscale'
                  }`}
                />
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </nav>
    </header>
  )
}

export default Menu
