import { NumAndUnitList } from '../constant.js'

export default [...NumAndUnitList, 'initial', 'inherit', 'auto'].map(
  (v) => `flex-basis-${v}`
)
