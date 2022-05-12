import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 360
 */
export const fontWeight = () =>
  [
    [
      /^(font-weight|fw)-(?<value>[1-9]00|bold|bolder|inherit|initial|lighter|normal|unset)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`font-weight: ${value}`])
      },
      {
        ...generatorLayer(360),
        autocomplete: `(font-weight|fw)-(100|200|300|400|500|600|700|800|900||bold|bolder|inherit|initial|lighter|normal|unset)`,
      },
    ],
  ] as Rule[]
