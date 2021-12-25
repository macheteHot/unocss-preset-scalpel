/**
 * order 550
 */
import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'

export default () =>
  [
    [
      /^border-style-(?<value>none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`border-style: ${value}`])
      },
      generatorLayer(550),
    ],
  ] as Rule[]
