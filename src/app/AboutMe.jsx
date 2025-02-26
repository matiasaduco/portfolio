import perfil from '@/assets/images/perfil.jpg'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <footer id='aboutMe'>
      <h1 className='text-center mb-10'>{t('aboutMe')}</h1>

      <img
        src={perfil}
        className='w-[400px]'
        style={{
          clipPath: 'circle(45%)',
          shapeOutside: 'circle(50%)',
          float: 'left',
        }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo quas
        id deserunt maxime aspernatur fugit ad tempora quo ullam nihil quidem,
        voluptas sint dolorem eaque in aliquam cum quam! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quasi illo quas id deserunt maxime
        aspernatur fugit ad tempora quo ullam nihil quidem, voluptas sint
        dolorem eaque in aliquam cum quam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi illo quas id deserunt maxime
        aspernatur fugit ad tempora quo ullam nihil quidem, voluptas sint
        dolorem eaque in aliquam cum quam!
      </p>
    </footer>
  )
}

export default AboutMe
