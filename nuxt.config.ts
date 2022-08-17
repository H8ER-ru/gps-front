import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head:{
            title: 'GPS - Great Price Service',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'msapplication-TileColor', content: '#da532c'},
                { name: 'theme-color', content: '#ffffff' }
            ],
            link: [
                // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
                // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
                // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
                // <link rel="manifest" href="/site.webmanifest">
                // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
                // <meta name="msapplication-TileColor" content="#da532c">
                // <meta name="theme-color" content="#ffffff">
                {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'}
            ],
            noscript: [
                { children: 'Javascript is required' }
            ]
        },
    },
    modules: [
        '@pinia/nuxt',
    ],
    css: [
      '@/assets/style/base.css'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/style/variables.sass"',
                },
            },
        },
    },
})
