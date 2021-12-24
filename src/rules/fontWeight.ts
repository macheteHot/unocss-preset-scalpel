import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 360
 */
export default [
  [
    /^(font-weight|fw)-(?<value>[1-9]00|bold|bolder|inherit|initial|lighter|normal|unset)$/,
    ({ groups }) => {
      const { value } = groups as { value: string }
      return ConvertToCssObject([`font-weight: ${value}`])
    },
    generatorLayer(360),
  ],
] as Rule[]
