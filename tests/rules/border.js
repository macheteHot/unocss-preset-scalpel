import { NumAndUnitList } from '../constant.js'

export default ['border', 'border-width', 'border-w'].map((bw) => {
  return ['t-', 'r-', 'b-', 'l-', 'x-', 'y-', ''].map((trblxy) => {
    return NumAndUnitList.map((v) => `${bw}-${trblxy}${v}`)
  })
})
