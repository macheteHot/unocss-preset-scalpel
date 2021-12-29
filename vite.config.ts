import { defineConfig } from 'vite'
import { presetAttributify } from 'unocss'
import unocss from 'unocss/vite'
import path from 'path'
import { presetScalpel } from './src/main'

const resolvePath = (str: string) => path.resolve(__dirname, str)

export default defineConfig(() => ({
  plugins: [
    unocss({
      presets: [
        presetAttributify(),
        presetScalpel({
          important: false,
          ignoreRules: [],
        }),
      ],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    outDir: 'dist',
    lib: {
      entry: resolvePath('./src/main.ts'),
      formats: ['es', 'cjs'],
      fileName: (type: string) => `index.${type === 'cjs' ? 'cjs' : 'mjs'}`,
    },
    rollupOptions: {
      external: ['unocss'],
    },
  },
}))
