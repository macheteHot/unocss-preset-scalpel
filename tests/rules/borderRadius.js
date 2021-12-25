import { NumAndUnitList } from '../constant.js'

export default ['border-radius', 'br'].map((br) =>
  NumAndUnitList.map((v) => `${br}-${v}`)
)
