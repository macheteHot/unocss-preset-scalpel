import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 420
 */

export default [
  [
    /^(text-decoration|text)-(?<value>none|underline|overline|line-through|blink|inherit)$/,
    ({ groups }) => {
      const { value } = groups as { value: string }
      return ConvertToCssObject([`text-decoration: ${value}`])
    },
    generatorLayer(420),
  ],
] as Rule[]
