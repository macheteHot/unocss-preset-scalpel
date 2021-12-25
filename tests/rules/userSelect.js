import {} from '../constant.js'

export default ['user-select', 'select'].map((s) =>
  ['none', 'auto', 'text', 'all', 'contain', 'element'].map((v) => `${s}-${v}`)
)
