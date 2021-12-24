/**
 * order 340
 */
import { Rule } from 'unocss'
import { CURSOR_ENUM_STR } from '../constant'
import { ConvertToCssObject, generatorLayer } from '../utils'

export default [
  [
    new RegExp(`^cursor-(?<value>${CURSOR_ENUM_STR})$`),
    ({ groups }) => {
      const { value } = groups as { value: string }
      return ConvertToCssObject([`cursor: ${value}`])
    },
    generatorLayer(340),
  ],
] as Rule[]
