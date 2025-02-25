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
      id='home'
      className='flex md:flex-col lg:flex-row h-screen justify-center items-center gap-12'
      style={{ width: '75%', margin: 'auto' }}
    >
      <ReactParticles />
      <img
        className='w-100 z-1 drop-shadow-[0_0_10px_#06B6D4]'
        src={perfil}
        alt='Foto de Perfil'
        style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
      />
      <div className='flex flex-col gap-4'>
        <div
          className='text-[1.4em] border rounded-[0.6em] border-[#06B6D4] bg-[#06B6D4]/5 p-4'
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
        <div className='md:self-center lg:self-start'>
          <i
            className='pi pi-github cursor-pointer p-2 mr-2 hover:scale-130 transition'
            style={{ fontSize: '2rem' }}
            onClick={() =>
              window.open('https://github.com/matiasaduco', '_blank')
            }
          />
          <i
            className='pi pi-linkedin cursor-pointer hover:scale-130 transition'
            style={{ fontSize: '2rem' }}
            onClick={() =>
              window.open('https://www.linkedin.com/in/matias-aduco/', '_blank')
            }
          />
        </div>
        <div className='md:self-center lg:self-start'>
          <Button
            className='w-[280px]'
            label={t('resume')}
            icon='pi pi-cloud-download'
            onClick={() => window.open(cv, '_blank')}
            rounded
            outlined
            style={{ marginRight: '1rem' }}
            pt={{
              root: {
                className: 'active:scale-95',
                style: {
                  background: 'linear-gradient(to right, #06B6D4, #bd98d8)',
                  color: 'white',
                },
              },
              icon: {
                style: {
                  fontSize: '1.2rem',
                },
              },
            }}
          />
          <Button
            className='w-[280px]'
            label='matias.aduco@gmail.com'
            icon={`pi ${!copied ? 'pi-copy' : 'pi-check'}`}
            onClick={copy}
            rounded
            outlined
            pt={{
              root: {
                className: 'active:scale-95',
                style: {
                  background: 'linear-gradient(to right, #06B6D4, #bd98d8)',
                  color: 'white',
                },
              },
              icon: {
                style: {
                  fontSize: '1.2rem',
                },
              },
            }}
          />
        </div>
      </div>
      <i className='pi pi-chevron-down animate-bounce absolute md:bottom-[1rem] lg:bottom-[3rem] text-[#06B6D4]' />
    </div>
  )
}

export default AboutMe
