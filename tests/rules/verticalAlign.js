import {VERTICAL_ALIGN_LIST,NumAndUnitList} from '../constant.js'

export default  [...VERTICAL_ALIGN_LIST, ...NumAndUnitList].map(s => 
  `vertical-align-${s}`
)