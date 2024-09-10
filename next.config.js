/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/colecciones',
                destination: '/collections',
                locale: false,
            },
            {
                source: '/perfil',
                destination: '/profile',
                locale: false,
            },
            {
                source: '/perfil/pedidos',
                destination: '/profile/orders',
                locale: false,
            },
            {
                source: '/perfil/pedidos/:id',
                destination: '/profile/orders/:id',
                locale: false,
            },
            {
                source: '/productos/:id',
                destination: '/products/:id',
                locale: false,
            },
            {
                source: '/iniciar-sesion',
                destination: '/login',
                locale: false,
            },
            {
                source: '/info/nosotros',
                destination: '/info/about-us',
                locale: false,
            },
            {
                source: '/info/contactanos',
                destination: '/info/contact-us',
                locale: false,
            },
            {
                source: '/info/politica-privacidad',
                destination: '/info/cookie-policy',
                locale: false,
            },
            {
                source: '/info/terminos-condiciones',
                destination: '/info/terms-and-conditions',
                locale: false,
            },
            {
                source: '/info/terminos-uso',
                destination: '/info/terms-of-use',
                locale: false,
            },
            {
                source: '/exito',
                destination: '/success',
                locale: false,
            },
        ];
    },
    images : {
        loader: 'custom',
        loaderFile: './loader.js',
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.wixstatic.com",
            },
        ],
    },
}

module.exports = nextConfig;
