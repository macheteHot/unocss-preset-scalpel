import { NumAndUnitList } from '../constant.js'

export default ['font-size', 'fs'].map((fs) =>
  NumAndUnitList.map((n) => `${fs}-${n}`)
)
