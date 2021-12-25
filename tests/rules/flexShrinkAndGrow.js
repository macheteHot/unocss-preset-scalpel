import { NUM_LIST } from '../constant.js'

export default ['shrink', 'grow'].map((sg) =>
  [...NUM_LIST, 'initial', 'inherit'].map((v) => `flex-${sg}-${v}`)
)
