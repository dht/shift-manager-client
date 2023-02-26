import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/

export default defineConfig({
    base: '/',
    build: {
        sourcemap: true,
        outDir: 'dist/site',
    },
    plugins: [react(), visualizer()],
    define: {},
    server: {
        host: true,
        port: 3000,
    },
});
