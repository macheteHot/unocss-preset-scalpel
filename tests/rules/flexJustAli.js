import { JUSTIFY_CONTENT_LIST, ALIGN_ITEMS_LIST } from '../constant.js'

export default JUSTIFY_CONTENT_LIST.map((jc) =>
  ALIGN_ITEMS_LIST.map((ai) => `flex-${jc}-${ai}`)
)
