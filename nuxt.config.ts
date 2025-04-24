// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },  
  app: {
    head: {
      title: 'La Economía Droguería',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Tu droguería de confianza con los mejores precios y productos'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/png', 
          href: '/assets/icons/icon_logo.png'
        }
      ]
    }
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    preset: 'vercel',
    externals: {
      inline: ['unhead', 'entities']
    }
  },

  build: {
    transpile: ['pinia', 'vue', 'estree-walker', 'vue-toastification', 'entities']
  },

  vite: {
    ssr: {
      noExternal: ['entities']
    },
    optimizeDeps: {
      include: ['vue', 'pinia', 'estree-walker', 'vue-toastification', 'entities']
    },
    server: {
      fs: {
        strict: false
      },
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

  ssr: true,
  
  experimental: {
    payloadExtraction: false
  },

  compatibilityDate: '2025-04-21'
})