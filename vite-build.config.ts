import { resolve } from 'path'
import { defineConfig } from 'vite'
import genDts from '@elonehoo/vite-plugin-type-ts'

export default defineConfig({
  plugins: [genDts()],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => `cypress-solid.${format}.js`
    },
    rollupOptions: {
      external: ['solidjs', 'solid-js/web'],
      output: {}
    }
  }
})
