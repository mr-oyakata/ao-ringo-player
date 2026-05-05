import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    baseURL: '/ao-ringo-player/',
    head: {
      title: 'AO-ringo Player',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/ao-ringo-player/favicon.ico' }],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: '',
    },
  },
  experimental: {
    appManifest: false,
  },
  css: ['~/assets/main.css'],
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },
  devServer: {
    port: 5173,
  },
})
