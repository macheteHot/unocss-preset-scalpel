import { NUM_LIST } from '../constant.js'

export default ['ellipsis', 'text', 'text-ellipsis'].map((t) =>
  NUM_LIST.map((n) => `${t}-${n}`)
)
