import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order Infinity
 */
export default () =>
  [
    [
      /^opacity-(?<value>([1-9]?\d|100))$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([
          `opacity: ${Number((Number(value) / 100).toFixed(2))}`,
        ])
      },
      generatorLayer(99998),
    ],
  ] as Rule[]
