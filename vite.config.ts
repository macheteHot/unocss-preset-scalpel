import { defineConfig } from 'vite'
import { presetAttributify } from 'unocss'
import unocss from 'unocss/vite'
import { presetScalpel } from './src/main'

export default defineConfig(() => ({
  plugins: [
    unocss({
      presets: [
        presetAttributify(),
        presetScalpel({
          important: true,
        }),
      ],
    }),
  ],
  build: {
    minify: true,
    lib: {
      entry: './src/main.ts',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['unocss'],
    },
  },
}))
