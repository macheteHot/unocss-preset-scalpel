import { defineConfig, type Options } from 'tsup'

export default defineConfig({
  entry: { index: 'src/main.ts' },
  format: ['esm'],
  outDir: 'dist',
  dts: { resolve: true },
  clean: true,
  minify: true,
  external: ['unocss'],
} satisfies Options)
