import {} from '../constant.js'

export default ['text-decoration', 'text'].map((text) =>
  ['none', 'underline', 'overline', 'line-through', 'blink', 'inherit'].map(
    (v) => `${text}-${v}`
  )
)
