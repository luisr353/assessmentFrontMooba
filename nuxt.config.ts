// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: ''
  },

  app: {
    head: {
      title: 'Droguería La Economía | Comprometidos con tu bienestar',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Droguería La Economía. Encuentra un gran surtido en productos para la Salud y medicamentos. Cuidado del bebé, Cuidado Personal, Belleza, entre otros.'
        },
        { 
          name: 'keywords', 
          content: 'Droguería virtual,Droguerías en colombia,Droguerías en Barranquilla,Droguerías en santa Marta,Droguerías en Cartagena,Droguerías en valledupar,Droguerías en Sincelejo,Droguerías en Bucaramanga,Droguerías en Bogota,Droguerías en Cali,Droguerías en ibague,Farmacia en ibague,Medicamentos a domicilios,Droguería con domicilio,Farmacia a domicilio'
        },
        { property: 'og:title', content: 'Droguería La Economía | Comprometidos con tu bienestar' },
        { property: 'og:description', content: 'Droguería La Economía. Encuentra un gran surtido en productos para la Salud y medicamentos. Cuidado del bebé, Cuidado Personal, Belleza, entre otros.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://laeconomia.com' },
        { property: 'og:image', content: '/images/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Droguería La Economía | Comprometidos con tu bienestar' },
        { name: 'twitter:description', content: 'Droguería La Economía. Encuentra un gran surtido en productos para la Salud y medicamentos. Cuidado del bebé, Cuidado Personal, Belleza, entre otros.' },
        { name: 'twitter:image', content: '/images/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  build: {
    transpile: ['pinia', 'vue', 'vue-toastification']
  },

  vite: {
    optimizeDeps: {
      include: ['vue', 'pinia', 'vue-toastification']
    },
    server: {
      fs: {
        strict: false
      },
      port: 3001
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    define: {
      'process.env.DEBUG': false
    },
    build: {
      target: 'esnext',
      minify: 'esbuild'
    }
  },

  experimental: {
    inlineSSRStyles: false
  },

  nitro: {
    esbuild: {
      options: {
        target: 'node18'
      }
    }
  },

  compatibilityDate: '2025-04-21'
})