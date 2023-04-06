import { NumAndUnitList } from '../constant.js'

export default ['border-radius', 'br'].map((br) =>
  [
    't-',
    'r-',
    'b-',
    'l-',
    'tl-',
    'lt-',
    'tr-',
    'rt-',
    'bl-',
    'lb-',
    'br-',
    'rb-',
    '',
  ].map((side) => NumAndUnitList.map((v) => `${br}-${side}${v}`))
)
