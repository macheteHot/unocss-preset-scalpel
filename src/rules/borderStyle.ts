/**
 * order 550
 */
import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'

export const borderStyle = () =>
  [
    [
      /^border(-style)?-(?<value>none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`border-style: ${value}`])
      },
      {
        ...generatorLayer(550),
        autocomplete:
          'border(-style|)-(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit)',
      },
    ],
  ] as Rule[]
