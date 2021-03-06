import type { Rule } from 'unocss'
import { assertUnreachable } from '../utils/typeTools'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 380 - 400
 */

export const overflow = () =>
  [
    [
      /^overflow(-(?<direction>[xy]))?-(?<value>hidden|auto|visible|scroll|inherit)$/,
      ({ groups }) => {
        const { direction, value } = groups as {
          direction?: undefined | 'x' | 'y'
          value: string
        }
        switch (direction) {
          case 'x':
          case 'y':
            return ConvertToCssObject([`overflow-${direction}: ${value}`])
          case undefined:
            return ConvertToCssObject([`overflow: ${value}`])
          default:
            return assertUnreachable(direction)
        }
      },
      {
        ...generatorLayer(380),
        autocomplete: `overflow(-x|-y|)-(hidden|auto|visible|scroll|inherit)`,
      },
    ],
  ] as Rule[]
