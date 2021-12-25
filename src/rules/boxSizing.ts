/**
 * order 560
 */
import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'

export default () =>
  [
    [
      /^box-sizing-(?<value>content-box|border-box)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`box-sizing: ${value}`])
      },
      generatorLayer(560),
    ],
  ] as Rule[]
