import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order Infinity
 */

export default  ()=> [
  [
    /^(object-fit)-(?<value>fill|contain|cover|none|scale-down|inherit|initial|revert|unset)$/,
    ({ groups }) => {
      const { value } = groups as { value: string }
      return ConvertToCssObject([`object-fit: ${value}`])
    },
    generatorLayer(99999),
  ],
] as Rule[]
