import {} from '../constant.js'

export default ['x-', 'y-', ''].map((xy) =>
  ['hidden', 'auto', 'visible', 'scroll', 'inherit'].map(
    (v) => `overflow-${xy}${v}`
  )
)
