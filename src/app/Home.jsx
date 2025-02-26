import perfil from '@/assets/images/perfil.jpg'
import cv from '@/assets/downloads/CV_2023022817213428.pdf'
import ReactParticles from '@/components/ReactParticles'
import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Tooltip } from 'primereact/tooltip'
import styled, { keyframes } from 'styled-components'

const Home = () => {
  const [copied, setCopied] = useState(false)
  const { t } = useTranslation()

  const copy = () => {
    navigator.clipboard.writeText('matias.aduco@gmail.com')
    setCopied(true)
  }

  return (
    <section
      id='home'
      className='flex md:flex-col lg:flex-row h-screen justify-center items-center gap-12'
    >
      {/* <ReactParticles /> */}
      <StyledImage
        className='w-100 z-1 drop-shadow-[0_0_10px_#06B6D4]'
        src={perfil}
        alt='Foto de Perfil'
        style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
      />
      <div className='flex flex-col gap-4'>
        <StyledArticle
          className='text-[1.4em] border rounded-[0.6em] border-[#06B6D4] bg-[#06B6D4]/5 p-4 font-[family-name:Chakra_Petch]'
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <Trans i18nKey='hi'>
            Hola, soy
            <b className='text-[#06B6D4] font-[family-name:Roboto]'>
              Matias Aduco
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
        </StyledArticle>
        <div className='md:self-center lg:self-start'>
          <StyledButton
            className='pi pi-github cursor-pointer p-2 mr-1 hover:scale-130 transition github-tooltip'
            style={{ fontSize: '2rem' }}
            onClick={() =>
              window.open('https://github.com/matiasaduco', '_blank')
            }
            data-pr-position='right'
            data-pr-my='left center-2'
          />
          <Tooltip target='.github-tooltip'>
            <i className='pi pi-external-link mr-2' />
            GitHub
          </Tooltip>

          <StyledButton
            className='pi pi-linkedin cursor-pointer p-2 mr-1 hover:scale-130 transition linkedin-tooltip'
            style={{ fontSize: '2rem', animationDelay: '0.3s' }}
            onClick={() =>
              window.open('https://www.linkedin.com/in/matias-aduco/', '_blank')
            }
            data-pr-position='right'
            data-pr-my='left center-2'
          />
          <Tooltip target='.linkedin-tooltip'>
            <i className='pi pi-external-link mr-2' />
            Linkedin
          </Tooltip>

          <StyledButton
            className='pi pi-cloud-download cursor-pointer p-2 mr-1 hover:scale-130 transition resume-tooltip'
            style={{ fontSize: '2rem', animationDelay: '0.6s' }}
            onClick={() => window.open(cv, '_blank')}
            data-pr-position='right'
            data-pr-my='left center-2'
          />
          <Tooltip target='.resume-tooltip'>
            <i className='pi pi-external-link mr-2' />
            {t('resume')}
          </Tooltip>

          <StyledButton
            className='pi pi-at cursor-pointer p-2 mr-1 hover:scale-130 transition knob'
            style={{ fontSize: '2rem', animationDelay: '0.9s' }}
            onClick={copy}
            data-pr-position='right'
            data-pr-my='left center-2'
          />

          <Tooltip target='.knob'>
            <i className={`${copied ? 'pi pi-check' : 'pi pi-copy'} mr-2`} />
            matias.aduco@gmail.com
          </Tooltip>
        </div>
      </div>
      <i className='pi pi-chevron-down animate-bounce absolute md:bottom-[1rem] lg:bottom-[3rem] text-[#06B6D4]' />
    </section>
  )
}

const popUp = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

const StyledButton = styled.i`
  animation-name: ${popUp};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  transform: scale(0);
`

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledArticle = styled.article`
  animation-name: ${fade};
  animation-duration: 1.5s;
`

const StyledImage = styled.img`
  animation-name: ${fade};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`

export default Home
