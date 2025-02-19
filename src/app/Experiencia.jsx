const Experiencia = () => {
  return (
    <section id='experiencia' className='py-20'>
      <h1 className='text-center text-6xl mb-15'>Experiencia</h1>

      <ol class='relative border-s border-gray-200 dark:border-gray-700 mx-auto max-w-2xl'>
        {/* Universidad Nacional de Quilmes */}
        <li class='mb-10 ms-4'>
          <div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Marzo 2022 - Julio 2023
          </time>
          <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
            Universidad Nacional de Quilmes
          </h3>
          <p class='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            Docente Auxiliar Académico de la materia Introducción a la
            Programación
          </p>
        </li>

        {/* Rwilde S.A. */}
        <li class='mb-10 ms-4'>
          <div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Abril 2023 - Septiembre 2023
          </time>
          <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
            Rwilde S.A.
          </h3>
          <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
            Desarrollador Full Stack encargado de mantener y mejorar la
            plataforma de la empresa
          </p>
        </li>

        {/* Cambá */}
        <li class='ms-4'>
          <div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Julio 2023 - Presente
          </time>
          <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
            Cambá
          </h3>
          <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
            Desarrollador Full Stack
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Experiencia
