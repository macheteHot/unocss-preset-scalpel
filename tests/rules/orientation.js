import { NumAndUnitList } from '../constant.js'

export default ['t', 'r', 'b', 'l', 'top', 'right', 'bottom', 'left'].map(
  (trbl) => ['m-', ''].map((m) => NumAndUnitList.map((v) => `${trbl}-${m}${v}`))
)
