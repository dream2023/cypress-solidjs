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
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['solid-js/web', 'solid-js', 'solid-js/jsx-runtime'],
      output: {}
    }
  }
})
