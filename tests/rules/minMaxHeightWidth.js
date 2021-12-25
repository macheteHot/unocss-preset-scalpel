import { NumAndUnitList } from '../constant.js'

export default ['min', 'max'].map((mm) =>
  ['w', 'width', 'h', 'height'].map((wh) =>
    NumAndUnitList.map((u) => `${mm}-${wh}-${u}`)
  )
)
