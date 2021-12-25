import { NumAndUnitList } from '../constant.js'

export default ['m-', ''].map((m) =>
  NumAndUnitList.map((v) => `letter-spacing-${m}${v}`)
)
