export default [
  'color',
  'c',
  'text',
  'bg',
  'background',
  'border-color',
  'border',
  'border-c',
].map((t) =>
  [
    'ff0',
    'ff00ff',
    'ff00ffff',
    '#ff0',
    '#ff00ff',
    '#ff00ffff',
    'red',
    'diyColor',
    'transparent',
  ].map((c) => ['', '-65', '-85'].map((o) => `${t}-${c}${o}`))
)
