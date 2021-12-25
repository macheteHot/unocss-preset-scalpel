/**
 * order 250
 */

import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'

export default () =>
  [
    [
      /^flex-(?<value>null|auto|none|(0|[1-9]\d*))$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`flex: ${value}`])
      },
      generatorLayer(250),
    ],
  ] as Rule[]
