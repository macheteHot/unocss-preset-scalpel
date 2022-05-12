import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 420
 */

export const textDecoration = () =>
  [
    [
      /^(text-decoration|text)-(?<value>none|underline|overline|line-through|blink|inherit)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`text-decoration: ${value}`])
      },
      {
        ...generatorLayer(420),
        autocomplete:
          '(text-decoration|text)-(none|underline|overline|line-through|blink|inherit)',
      },
    ],
  ] as Rule[]
