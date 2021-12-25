import {} from '../constant.js'

export default ['text-align-last', 'text-last'].map((t) =>
  [
    'auto',
    'left',
    'right',
    'center',
    'justify',
    'start',
    'end',
    'initial',
    'inherit',
  ].map((v) => `${t}-${v}`)
)
