import {} from '../constant.js'

export default ['text-align', 'text'].map((t) =>
  ['start', 'end', 'left', 'right', 'center', 'justify', 'match-parent'].map(
    (v) => `${t}-${v}`
  )
)
