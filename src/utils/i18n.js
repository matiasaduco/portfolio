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
          I love learning new things and i am always looking for new challenges.
        `,
      experience: 'Experience',
      projects: 'Projects',
      resume: 'Resume',
      march: 'March',
      july: 'July',
      present: 'Currently',
      april: 'April',
      september: 'September',
      english: 'English',
      spanish: 'Spanish',
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
      experience: 'Experiencia',
      projects: 'Proyectos',
      resume: 'Currículum',
      march: 'Marzo',
      july: 'Julio',
      present: 'Presente',
      april: 'Abril',
      september: 'Septiembre',
      english: 'Inglés',
      spanish: 'Español',
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
