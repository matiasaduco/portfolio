import './aboutMe.css'
import perfil from '@/assets/images/perfil.jpg'
import cv from '@/assets/downloads/CV_2023022817213428.pdf'
import { Button } from 'primereact/button'
import ReactParticles from '@/components/ReactParticles'
import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'

const AboutMe = () => {
  const [copied, setCopied] = useState(false)
  const { t } = useTranslation()

  const copy = () => {
    navigator.clipboard.writeText('matias.aduco@gmail.com')
    setCopied(true)
  }

  return (
    <div
      id='inicio'
      className='flex md:flex-col lg:flex-row h-screen justify-center items-center gap-12'
      style={{ width: '75%', margin: 'auto' }}
    >
      <ReactParticles />
      <img
        className='profile w-100 z-1 drop-shadow-[0_0_10px_#06B6D4]'
        src={perfil}
        alt='Foto de Perfil'
      />
      <div className='flex flex-col gap-4'>
        <div
          className='biography border border-1 border-[#06B6D4] bg-[#06B6D4]/5 p-4'
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <Trans i18nKey='hi'>
            Hola, soy
            <b className='bg-gradient-to-r from-[#06B6D4] to-white bg-clip-text text-transparent'>
              Matías Aduco
            </b>
            <p className='font-bold mb-1 text-[#32dbbc]'>
              Desarrollador Full Stack
            </p>
            Tengo <b className='text-[#bd98d8]'>+2 años de experiencia</b> en el
            desarrollo de aplicaciones web. Me especializo con tecnologías como{' '}
            <b className='text-[#eee8a9]'>React, Vue, Node.js, Express y SQL</b>
            . Me encanta aprender cosas nuevas y siempre estoy en la búsqueda de
            nuevos desafíos.
          </Trans>
        </div>
        <div className='flex gap-4 md:justify-center lg:justify-start'>
          <a
            href={cv}
            download='Matias Gonzalez Aduco.pdf'
            className='gap-2 p-button font-bold p-button-rounded p-button-outlined'
          >
            <i className='pi pi-cloud-download' />
            {t('resume')}
          </a>
          <Button
            label='GitHub'
            icon='pi pi-github'
            onClick={() =>
              window.open('https://github.com/matiasaduco', '_blank')
            }
            rounded
            outlined
          />
          <Button
            label='Linkedin'
            icon='pi pi-linkedin'
            onClick={() =>
              window.open('https://www.linkedin.com/in/matias-aduco/', '_blank')
            }
            rounded
            outlined
          />
        </div>
        <Button
          className='md:self-center lg:self-start'
          label='matias.aduco@gmail.com'
          icon={`pi ${!copied ? 'pi-copy' : 'pi-check'}`}
          onClick={copy}
          rounded
          outlined
        />
      </div>
    </div>
  )
}

export default AboutMe
