import {} from '../constant.js'

export default [
  'visible',
  'hidden',
  'collapse',
  'inherit',
  'initial',
  'revert',
  'unset',
].map((t) => `visibility-${t}`)
