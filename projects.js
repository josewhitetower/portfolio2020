export default {
  1: {
    title: 'Jetflix',
    image: '/jetflix.png',
    type: 'Full Stack',
    description:
      "A web application that consumes movies from <a href='https://www.themoviedb.org/about' rel='nofoollow noopener' target='_blank' >The Movie Database (TMDb)</a> through a GraphQL <a href='https://jt-jetflix.appspot.com/graphql' rel='nofoollow noopener' target='_blank' >server</a >. It allows users to search, bookmark and save movies as favorites. Deployed using the <a href='https://surge.sh/' rel='nofoollow noopener' target='_blank' >Surge.sh</a> platform CLI (it's never been easier).",
    stack: 'Nuxt.js, TailwindCSS, GraphQL',
    liveDemo: 'https://jt-jetflix.surge.sh',
    sourceCode: 'https://github.com/josewhitetower/jetflix'
  },
  2: {
    title: 'Auth',
    image: '/auth.png',
    type: 'Full Stack',
    description:
      'A web portal where users can register, and manage their accounts. The backend REST API can be consumed from websites, mobile apps, or any other web service and some integrations test are performed using <a href="https://jestjs.io/" rel="nofoollow noopener" target="_blank" >Jest</a>.',
    stack: 'React.js, Redux, MaterializeCSS, Express.js, Jest, Docker',
    liveDemo: 'https://jt-user-manager.herokuapp.com/',
    sourceCode: 'https://github.com/josewhitetower/auth'
  },
  3: {
    title: 'Todo Vue Composition',
    image: '/todo.png',
    type: 'Frontend',
    description:
      "A Single Page Application to manage and filter tasks using the Vue.js composition API. Items can be dragged and will be stored using the browser's local Storage. Deployed using <a href='https://www.netlify.com/' rel='nofoollow noopener' target='_blank' >Netlify</a>",
    stack: 'Vue.js, TailwindCSS, Local Storage',
    liveDemo: 'https://todo-vue-composition.netlify.com',
    sourceCode: 'https://github.com/josewhitetower/todo-vue-composition'
  }
}
