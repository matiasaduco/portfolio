import { Dropdown } from 'primereact/dropdown'
import { useState } from 'react'
import i18n from '@/utils/i18n'
import { useTranslation } from 'react-i18next'
import spain from '@/assets/icons/spain.svg'
import uk from '@/assets/icons/uk.svg'

const Menu = () => {
  const { t } = useTranslation()
  const [language, setLanguage] = useState('es')
  const languages = [
    { label: 'Español', value: 'es', image: spain },
    { label: 'English', value: 'en', image: uk },
  ]

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.value)
    setLanguage(e.value)
  }

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className='flex items-center w-[100px]'>
          <img src={option.image} width='100%' height='100px' className='mr-2' />
          <div>{option.label}</div>
        </div>
      )
    }

    return <span>{props.placeholder}</span>
  }

  const countryOptionTemplate = (option) => {
    return (
      <div className='flex items-center'>
        <img src={option.image} width='40px' className='mr-2' />
        <div>{option.label}</div>
      </div>
    )
  }

  return (
    <header
      className='fixed top-0 z-2'
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
        <Dropdown
          value={language}
          onChange={changeLanguage}
          options={languages}
          optionLabel='label'
          optionValue='value'
          valueTemplate={selectedCountryTemplate}
          itemTemplate={countryOptionTemplate}
          pt={{
            root: {
              style: {
                position: 'absolute',
                right: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
              },
            },
          }}
        />
      </nav>
    </header>
  )
}

export default Menu
