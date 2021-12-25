import {} from '../constant.js'

export default ['flex-direction', 'flex'].map((t) =>
  ['row', 'row-reverse', 'column', 'column-reverse'].map((v) => `${t}-${v}`)
)
