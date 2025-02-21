import { Dropdown } from 'primereact/dropdown'
import { useState } from 'react'
import i18n from '@/utils/i18n'
import { useTranslation } from 'react-i18next'

const Menu = () => {
  const { t } = useTranslation()
  const [language, setLanguage] = useState('es')
  const languages = [
    { label: t('spanish'), value: 'es', icon: 'pi pi-copy' },
    { label: t('english'), value: 'en', icon: 'pi pi-file' },
  ]

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.value)
    setLanguage(e.value)
  }

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className='flex items-center'>
          <i className={`mr-2 ${option.icon}`} />
          <div>{option.label}</div>
        </div>
      )
    }

    return <span>{props.placeholder}</span>
  }

  const countryOptionTemplate = (option) => {
    return (
      <div className='flex items-center'>
        <i className={`mr-2 ${option.icon}`} />
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
          {t('experience')}
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
        />
      </nav>
    </header>
  )
}

export default Menu
