import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 320
 */

export const textAlign = () =>
  [
    [
      /^(text-align|text)-(?<value>start|end|left|right|center|justify|match-parent)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`text-align: ${value}`])
      },
      {
        ...generatorLayer(320),
        autocomplete:
          '(text-align|text)-(start|end|left|right|center|justify|match-parent)',
      },
    ],
  ] as Rule[]
