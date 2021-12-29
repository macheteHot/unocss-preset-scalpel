export default [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'inherit',
].map((v) => ['border', 'border-style'].map((prefix) => `${prefix}-${v}`))
