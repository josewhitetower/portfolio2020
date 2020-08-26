export default {
  mode: 'universal',
  target: 'static',
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-atom-dark.css'
      }
    }
  },
  router: {
    prefetchPayloads: false,
    prefetchLinks: false
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'José Torreblanca: Frontend Developer' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-96x96.png',
        sizes: '96x96'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css', '@/assets/css/fonts.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
    // Doc: https://github.com/nuxt-commmunity/nuxt-tailwindcss
    // '@nuxtjs/tailwindcss'
  ],
  markdownit: {
    injected: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-purgecss',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxt/content',
    '@nuxtjs/markdownit',

    // 'nuxt-fontawesome'
    // font awesome
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faBars', 'faTimes', 'faEnvelope']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faGithub', 'faTwitter', 'faLinkedin', 'faXing']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extractCSS: true,
    analyze: true,
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    extend(config, ctx) {}
  },
  purgeCSS: {
    mode: 'postcss',
    whitelistPatterns: [/(^|\.)fa-/, /-fa($|\.)/]
  }
}
