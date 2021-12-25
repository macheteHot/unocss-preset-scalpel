import { GAP_LIST, NumAndUnitList } from '../constant.js'

export default ['r', 'row'].map((t) =>
  [...GAP_LIST, ...NumAndUnitList].map((s) => `${t}-gap-${s}`)
)
