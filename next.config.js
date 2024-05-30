await import('./src/env.js');

const config = {
    experimental: { 
        esmExternals: 'loose' 
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/paginas/',
            },
            {
                source: '/alquiler',
                destination: '/paginas/alquiler',
            },
            {
                source: '/deportes',
                destination: '/paginas/deportes',
            },
            {
                source: '/registroalquiler',
                destination: '/paginas/registroalquiler',
        },
        {
            source: '/perfil',
            destination: '/paginas/perfil',
    },
            // Añade más rutas aquí según lo necesites
        ];
    },
};

export default config;