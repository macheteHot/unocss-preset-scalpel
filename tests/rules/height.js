import { NumAndUnitList } from '../constant.js'

export default ['height', 'h'].map((d) =>
  NumAndUnitList.map((u) => `${d}-${u}`)
)
