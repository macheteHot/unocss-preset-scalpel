import { NumAndUnitList } from '../constant.js'

export default ['m', 'margin', 'p', 'padding'].map((mp) =>
  ['t-', 'r-', 'b-', 'l-', 'x-', 'y-', ''].map((trblxy) =>
    ['m-', ''].map((m) =>
      [...NumAndUnitList, 'auto'].map((u) => `${mp}-${trblxy}${m}${u}`)
    )
  )
)
