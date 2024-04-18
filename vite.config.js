// import reactRefresh from '@vitejs/plugin-react-refresh';
// import path from 'path';

// const config = {
//     plugins: [reactRefresh()],
//     resolve: {
//         alias: {
//             '@components': path.resolve(__dirname, './src/components'),
//             '@images': path.resolve(__dirname, './src/images'),
//             '@style': path.resolve(__dirname, './src/style'),
//         },
//     },
//     build: {
//         // Set the base directory for production builds
//         base: '/',
//     },
// };

// export default config;


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true
//   },
//   build: {
//     base: '/'
//   }
// });

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: 'dist', // Specify the output directory
    assetsDir: '', // Specify the directory for static assets (CSS, JS, etc.)
    sourcemap: true, // Generate source maps for debugging
    minify: true, // Minify output for production
  },
});
