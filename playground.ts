import { createGenerator } from 'unocss'
import { presetScalpel } from './src/main'

const uno = await createGenerator({
  presets: [presetScalpel()],
})

const classes = [
  // flex
  'flex-column',
  'flex-wrap',
  'flex-center-center',
  // spacing
  'p-16',
  'm-t-8',
  'gap-12',
  // color
  'bg-f5f5f5',
  'c-red',
  // sizing
  'w-100p',
  'h-48',
  'br-4',
]

const { css } = await uno.generate(classes.join(' '), { preflights: false })
console.log(css)
