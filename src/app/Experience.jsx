import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()

  return (
    <section id='experience' className='py-10'>
      <h1 className='text-center text-6xl mb-15'>{t('experience.title')}</h1>

      <ol className='relative border-s border-gray-200 dark:border-gray-700 mx-auto max-w-2xl'>
        <li className='mb-10 ms-4'>
          {/* Cambá */}
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {t('july')} 2023 - {t('present')}
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Cambá
          </h3>
          <p className='mb-2 text-base font-normal text-gray-500 dark:text-gray-400'>
            {t('experience.camba')}
          </p>
        </li>

        {/* Rwilde S.A. */}
        <li className='mb-10 ms-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {t('april')} 2023 - {t('september')} 2023
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Rwilde S.A.
          </h3>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            {t('experience.rwilde')}
          </p>
        </li>

        {/* Universidad Nacional de Quilmes */}
        <li className='ms-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {t('march')} 2022 - {t('july')} 2023
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Universidad Nacional de Quilmes
          </h3>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            {t('experience.unqui')}
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Experience
