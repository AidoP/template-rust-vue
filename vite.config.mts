import { defineConfig } from 'npm:vite@^4.3.9'
import vue from 'npm:@vitejs/plugin-vue@^4.2.3'

import 'npm:vue@^3.3.4'
import wasm from 'npm:vite-plugin-wasm@^3.2.2'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [wasm(), vue()],
    build: {
        target: 'esnext',
        outDir: 'target/dist'
    }
})
