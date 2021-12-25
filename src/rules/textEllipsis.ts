import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 450
 */

export default () =>
  [
    [
      /^(text-)?ellipsis(-(?<value>[1-9]\d*))?$/,
      ({ groups }) => {
        let { value } = groups as { value?: string }
        if (Number(value) === 1) {
          value = undefined // 和没写是一样的
        }
        if (value === undefined) {
          return ConvertToCssObject([
            'overflow: hidden',
            'text-overflow: ellipsis',
            'white-space: nowrap',
          ])
        }
        return ConvertToCssObject([
          'overflow: hidden',
          'text-overflow: ellipsis',
          'display: -webkit-box',
          `-webkit-line-clamp: ${value}`,
          '-webkit-box-orient: vertical',
        ])
      },
      generatorLayer(450),
    ],
  ] as Rule[]
