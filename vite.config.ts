import path from 'path';
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    "alias": {
      "@dream2023/cypress-solidjs": path.resolve(__dirname, "src/index.ts")
    }
  }
})
