import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 430
 */

export const userSelect = () =>
  [
    [
      /^(user-)?select-(?<value>none|auto|text|all|contain|element)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`user-select: ${value}`])
      },
      generatorLayer(430),
    ],
  ] as Rule[]
