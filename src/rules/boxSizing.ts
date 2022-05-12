/**
 * order 560
 */
import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'

export const boxSizing = () =>
  [
    [
      /^box-sizing-(?<value>content-box|border-box)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`box-sizing: ${value}`])
      },
      {
        ...generatorLayer(560),
        autocomplete: `box-sizing-(content-box|border-box)`,
      },
    ],
  ] as Rule[]
