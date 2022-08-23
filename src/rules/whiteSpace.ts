/**
 * order 220
 */
import type { Rule } from 'unocss'

import { ConvertToCssObject, generatorLayer } from '../utils'
import { WHITE_SPACE_ENUM_STR } from '../constant'

export const WhiteSpace = () =>
  [
    [
      new RegExp(`^white-space-(?<value>${WHITE_SPACE_ENUM_STR})$`),
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`white-space: ${value}`])
      },
      {
        ...generatorLayer(99999),
        autocomplete: `align-items-(${WHITE_SPACE_ENUM_STR})`,
      },
    ],
  ] as Rule[]
