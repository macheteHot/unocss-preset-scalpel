import {NUM_LIST} from '../constant.js'

export default ['m-', ''].map(m => 
  NUM_LIST.map(n => 
    `z-index-${m}${n}`
  )
)
