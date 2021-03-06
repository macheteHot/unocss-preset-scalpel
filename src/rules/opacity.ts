import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order Infinity
 */
export const opacity = () =>
  [
    [
      /^opacity-(?<value>([1-9]?\d|100))$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([
          `opacity: ${Number((Number(value) / 100).toFixed(2))}`,
        ])
      },
      {
        ...generatorLayer(99998),
        autocomplete: 'opacity-<num>',
      },
    ],
  ] as Rule[]
