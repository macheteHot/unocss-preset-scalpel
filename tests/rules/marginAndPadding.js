import { NumAndUnitList } from '../constant.js'

export default ['m', 'margin', 'p', 'padding'].map((mp) =>
  ['t-', 'r-', 'b-', 'l-', 'x-', 'y-', ''].map((trblxy) =>
    ['m-', ''].map((m) => NumAndUnitList.map((u) => `${mp}-${trblxy}${m}${u}`))
  )
)
