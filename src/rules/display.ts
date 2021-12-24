/**
 * order 290
 */
import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
import { DISPLAY_STR } from '../constant'

export default [
  [
    new RegExp(`^(display|d)-(?<value>${DISPLAY_STR})`),
    ({ groups }) => {
      const { value } = groups as { value: string }
      return ConvertToCssObject([`display: ${value}`])
    },
    generatorLayer(290),
  ],
] as Rule[]
