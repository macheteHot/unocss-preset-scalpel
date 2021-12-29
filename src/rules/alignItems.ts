/**
 * order 220
 */
import type { Rule } from 'unocss'

import { ALIGN_ITEMS_ENUM_STR } from '../constant'

import { ConvertToCssObject, generatorLayer } from '../utils'

export default () =>
  [
    [
      new RegExp(`^align-items-(?<align>${ALIGN_ITEMS_ENUM_STR})$`),
      ({ groups }) => {
        const { align } = groups as { align: string }
        return ConvertToCssObject([`align-items: ${align}`])
      },
      generatorLayer(220),
    ],
  ] as Rule[]
