import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      hi: `
          Hi, I'm <1>Matías Aduco</1>
          <2>Full Stack Developer</2>
          I have <4>+2 years of experience</4> in web development.
          I specialize in technologies such as <7>React, Vue, Node.js, Express y SQL</7>.
          I love learning new things and I am always looking for new challenges.
        `,
      experience: 'Experience',
      projects: 'Projects',
      resume: 'Resume',
      march: 'March',
      july: 'July',
      present: 'Currently',
      april: 'April',
      september: 'September',
      experience: {
        camba: `
          At Cambá I was a Full Stack Developer in charge of the migration of
          AdminSE web to its new version using Vue 3 along with libraries like
          PrimeVue 3 and PrimeFlex.
          Also I was in charge of its migration to the new version of PrimeVue,
          going from PrimeVue version 3 to 4.
        `,
        rwilde: `
          At Rwilde S.A. I was a Full Stack Developer in charge of the creation and
          maintenance of the Rwilde S.A. website so that customers who found the
          website could see all the Mercado Libre publications of said company.
          This page was created with React.
        `,
        unqui: `
          I was an academic assistant teacher of the Introduction to Programming
          subject where I taught the basic concepts of programming to new students.
        `,
      },
    },
  },
  es: {
    translation: {
      hi: `
          Hola, soy <1>Matías Aduco</1>
          <2>Deasrrollador Full Stack</2>
          Tengo <4>+2 años de experiencia</4> en el desarrollo de aplicaciones web.
          Me especializo con tecnologías como <7>React, Vue, Node.js, Express y SQL</7>.
          Me encanta aprender cosas nuevas y siempre estoy en la búsqueda de nuevos desafíos.
        `,
      projects: 'Proyectos',
      resume: 'Currículum',
      march: 'Marzo',
      july: 'Julio',
      present: 'Presente',
      april: 'Abril',
      september: 'Septiembre',
      experience: {
        title: 'Experiencia',
        camba: `
          En Cambá fuí Desarrollador Full Front End encargado de la migración de la web de
          AdminSE a su nueva versión utilizando Vue 3 junto con librerías como
          PrimeVue 3 y PrimeFlex.
          También me encargué de su migración a la nueva versión de PrimeVue,
          pasando de la versión 3 a la 4.
        `,
        rwilde: `
          En Rwilde fuí Desarrollador Full Stack encargado de la creación y mantenimiento de
          la web de Rwilde S.A. para que los clientes que hayaran la web
          pudieran ver todas las publicaciones de Mercado Libre de dicha
          empresa. Dicha página fue creada con React.
        `,
        unqui: `
          Fuí docente auxiliar académico de la materia Introducción a la
          Programación en donde enseñé los conceptos básicos de programación
          para los nuevos alumnos. También corregía examenes.
        `,
      },
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
