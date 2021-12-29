import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 260-270
 */
export const flexShrinkAndGrow = () =>
  [
    [
      /^flex-(?<type>shrink)-(?<value>(0|[1-9]\d*)|initial|inherit)$/,
      ({ groups }) => {
        const { type, value } = groups as { type: string; value: string }
        return ConvertToCssObject([`flex-${type}: ${value}`])
      },
      generatorLayer(260),
    ],
    [
      /^flex-(?<type>grow)-(?<value>(0|[1-9]\d*)|initial|inherit)$/,
      ({ groups }) => {
        const { type, value } = groups as { type: string; value: string }
        return ConvertToCssObject([`flex-${type}: ${value}`])
      },
      generatorLayer(270),
    ],
  ] as Rule[]
