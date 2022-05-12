import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order Infinity
 */

export const objectFit = () =>
  [
    [
      /^(object-fit)-(?<value>fill|contain|cover|none|scale-down|inherit|initial|revert|unset)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`object-fit: ${value}`])
      },
      {
        ...generatorLayer(99999),
        autocomplete: `(object-fit)-(fill|contain|cover|none|scale-down|inherit|initial|revert|unset)`,
      },
    ],
  ] as Rule[]
