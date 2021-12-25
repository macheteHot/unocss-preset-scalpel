import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 350
 */

export default () =>
  [
    [
      /^word-break-(?<value>normal|break-all|keep-all|break-word|inherit|initial|unset)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`word-break: ${value}`])
      },
      generatorLayer(350),
    ],
  ] as Rule[]
