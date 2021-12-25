import {} from '../constant.js'

export default [
  'static',
  'relative',
  'sticky',
  'unset',
  'absolute',
  'fixed',
  'inherit',
  'initial',
].map((v) => `position-${v}`)
