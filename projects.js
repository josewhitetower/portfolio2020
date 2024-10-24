export default {
  1: {
    title: 'Jetflix',
    image: '/jetflix.png',
    type: 'Full Stack',
    description:
      "A web application that consumes movies from <a href='https://www.themoviedb.org/about' rel='nofoollow noopener' target='_blank' >The Movie Database (TMDb)</a> through a GraphQL <a href='https://jt-jetflix.appspot.com/graphql' rel='nofoollow noopener' target='_blank' >server</a >. It allows authenticated in users to search, bookmark and save movies as favorites. Deployed using Netlify and AWS Lambda functions.",
    stack: 'Nuxt.js, TailwindCSS, GraphQL, Firebase, AWS',
    liveDemo: 'https://jt-jetflix.netlify.app/',
    sourceCode: 'https://github.com/josewhitetower/jetflix'
  },
  2: {
    title: 'Excercise Tracker',
    image: '/exercise.png',
    type: 'Backend',
    description:
      "A REST API written in <a href='https://golang.org/' rel='nofoollow noopener' target='_blank' >Golang</a> that allows to manage user and exercises logs. Documented using Postman's documentation  <a href='https://www.postman.com/api-documentation-tool/' rel='nofoollow noopener' target='_blank'>Tool</a>.",
    stack: 'Golang',
    liveDemo: 'https://documenter.getpostman.com/view/2984199/TzseJm3P',
    sourceCode: 'https://github.com/josewhitetower/jt-exercise-tracker-mic'
  },
  3: {
    title: 'Unpix',
    image: '/unpix.png',
    type: 'Frontend',
    description:
      "A Single Page Application to to search images using the <a href='https://www.unplash.com/' rel='nofoollow noopener' target='_blank' >Uplash</a>  API. Designed with a Grid system similar to Instagram's. Photos can be saved as favorites and will be stored using the browser's local Storage, i18n is also applied. Deployed using <a href='https://www.netlify.com/' rel='nofoollow noopener' target='_blank' >Netlify</a>",
    stack: 'Vue.js, TailwindCSS, Local Storage, i18n',
    liveDemo: 'https://jt-unpix.netlify.app/',
    sourceCode: 'https://github.com/josewhitetower/unpix'
  },
  4: {
    title: 'Auth',
    image: '/auth.png',
    type: 'Full Stack',
    description:
      "A web portal where users can register, and manage their accounts. The backend REST API can be consumed from websites, mobile apps, or any other web service and some integrations test are performed using <a href='https://jestjs.io/' rel='nofoollow noopener' target='_blank' >Jest</a>.",
    stack: 'React.js, Redux, MaterializeCSS, Express.js, Jest, Docker',
    liveDemo: 'https://jt-user-manager.herokuapp.com/',
    sourceCode: 'https://github.com/josewhitetower/auth'
  }
}
