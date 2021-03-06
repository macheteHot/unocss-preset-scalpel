import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 190
 */
export const zIndex = () =>
  [
    [
      /^z-index-(?<isMinus>m-)?(?<value>0|[1-9]\d*)$/,
      ({ groups }) => {
        const { isMinus, value } = groups as { isMinus?: string; value: string }
        const newValue = isMinus ? `-${value}` : `${value}`
        return ConvertToCssObject([`z-index: ${newValue}`])
      },
      {
        ...generatorLayer(190),
        autocomplete: 'z-index-(m-|)<num>',
      },
    ],
  ] as Rule[]
