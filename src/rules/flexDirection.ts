import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'

/**
 * order 230
 */

export default () =>
  [
    [
      /^(flex-direction|flex)-(?<value>row|row-reverse|column|column-reverse)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`flex-direction: ${value}`])
      },
      generatorLayer(230),
    ],
  ] as Rule[]
