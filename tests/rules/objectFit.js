import {} from '../constant.js'

export default [
  'fill',
  'contain',
  'cover',
  'none',
  'scale-down',
  'inherit',
  'initial',
  'revert',
  'unset',
].map((val) => `object-fit-${val}`)
