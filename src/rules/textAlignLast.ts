import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 440
 */

export const textAlignLast = () =>
  [
    [
      /^(text-align-last|text-last)-(?<value>auto|left|right|center|justify|start|end|initial|inherit)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`text-align-last: ${value}`])
      },
      generatorLayer(440),
    ],
  ] as Rule[]
