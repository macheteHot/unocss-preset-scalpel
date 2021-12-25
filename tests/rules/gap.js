import { GAP_LIST, NumAndUnitList } from '../constant.js'

export default [...GAP_LIST, ...NumAndUnitList].map((s) => `gap-${s}`)
