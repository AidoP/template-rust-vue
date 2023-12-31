import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import wasm from 'vite-plugin-wasm';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [wasm(), vue()],
    build: {
        target: 'esnext',
        outDir: 'target/dist'
    },
    worker: {
        format: 'es',
        plugins: [wasm()]
    },
    resolve: {
        alias: {
            '@': resolve('./src')
        }
    }
});
