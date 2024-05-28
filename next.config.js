/**
 * Run build or dev with SKIP_ENV_VALIDATION to skip env validation. This is especially useful
 * for Docker builds.
 */
/** @type {import("next").NextConfig} */

  //CORREGIR CORREGIR CORREGIR TODO PENDIENTE ESTO NO MAL
await import('./src/env.js')


const config = {
    experimental: { esmExternals: 'loose' },
  
};
export default config