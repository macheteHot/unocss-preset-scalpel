import { NumAndUnitList } from '../constant.js'

export default ['lh', 'line-height'].map((lh) =>
  [...NumAndUnitList, 'normal', 'unset', 'inherit', 'initial'].map(
    (v) => `${lh}-${v}`
  )
)
