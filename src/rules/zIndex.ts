import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 190
 */
export default () =>
  [
    [
      /^z-index-(?<isMinus>m-)?(?<value>0|[1-9]\d*)$/,
      ({ groups }) => {
        const { isMinus, value } = groups as { isMinus?: string; value: string }
        const newValue = isMinus ? `-${value}` : `${value}`
        return ConvertToCssObject([`z-index: ${newValue}`])
      },
      generatorLayer(190),
    ],
  ] as Rule[]
