import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 320
 */

export default () =>
  [
    [
      /^(text-align|text)-(?<value>start|end|left|right|center|justify|match-parent)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`text-align: ${value}`])
      },
      generatorLayer(320),
    ],
  ] as Rule[]
