export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'crud',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: 'green',
    height: '5px',
  },


  axios: {
    baseURL: 'http://localhost:8002/api/v1/', // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


  toast: {
     position: 'top-right',
     register: [ // Register custom toasts
       {
         name: 'notif_success',
         message: 'Successfully',
         options: {
           type: 'success',
           duration: 5000
         }
       },
       {
         name: 'notif_error',
         message: 'Somethong wrong !!',
         options: {
           type: 'error',
           duration: 5000
         }
       }
     ]
   }

}
