import { useState } from 'react'
import i18n from '@/utils/i18n'
import { useTranslation } from 'react-i18next'
import spain from '@/assets/icons/spain.svg'
import uk from '@/assets/icons/uk.svg'
import { ButtonGroup } from 'primereact/buttongroup'
import { Button } from 'primereact/button'
import styled, { keyframes } from 'styled-components'

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

  const btn =
    'text-[#06B6D4] px-4 py-3 border-b-2 border-b-[transparent] hover:border-b-[#06B6D4] transition duration-300 easi-in-out text-[1.1rem]'

  return (
    <header className='fixed top-0 z-2 w-[100%]'>
      <StyledMenu
        className='flex justify-between items-center'
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
        }}
      >
        <a href='#home' className='pi pi-code w-[123px] text-center' />
        <div className='my-3'>
          <a href='#experience' className={btn}>
            {t('experience.title')}
          </a>
          {/* <a href='#projects' className={btn}>
            {t('projects')}
          </a> */}
          <a href='#knowledge' className={btn}>
            {t('knowledge')}
          </a>
        </div>
        <div className='w-[123px] text-center'>
          <ButtonGroup>
            {languages.map((lang) => (
              <Button
                onClick={() => changeLanguage(lang.value)}
                style={{ padding: '0' }}
              >
                <img
                  src={lang.image}
                  className={`object-cover w-[40px] h-[25px] ${
                    lang.value === language ? 'grayscale-[0]' : 'grayscale'
                  }`}
                />
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </StyledMenu>
    </header>
  )
}

const fadeIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const StyledMenu = styled.nav`
  animation-name: ${fadeIn};
  animation-duration: 1s;
`

export default Menu
