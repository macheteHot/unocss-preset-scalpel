import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 300
 */

export const position = () =>
  [
    [
      /^position-(?<value>static|relative|sticky|unset|absolute|fixed|inherit|initial)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`position: ${value}`])
      },
      {
        ...generatorLayer(300),
        autocomplete:
          'position-(static|relative|sticky|unset|absolute|fixed|inherit|initial)',
      },
    ],
  ] as Rule[]
