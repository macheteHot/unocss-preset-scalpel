import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 240
 */
export default () =>
  [
    [
      /^flex-wrap-(?<value>inherit|initial|nowrap|wrap|wrap-reverse)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`flex-wrap: ${value}`])
      },
      generatorLayer(240),
    ],
  ] as Rule[]
