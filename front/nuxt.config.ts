import colors from 'tailwindcss/colors';

export default defineNuxtConfig({
    ssr:  true,
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n',
        '@nuxt/image',
    ],
    runtimeConfig: {
        public: {
            apiUrl:'http://localhost:4000', // Обратите внимание на "public"
        },
    },
    tailwindcss: {
        exposeConfig: true,
        config: {
            theme: {
                container: { center: true },
                colors: {
                    ...colors,
                    primary: {
                        300: '#001389',
                        400: '#8F97C4',
                        500: '#FF0046',
                        600: '#F2F4FE',
                    },
                },
            },
        },
    },
    css: ['~/assets/css/main.css'],
});
