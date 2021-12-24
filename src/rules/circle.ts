/**
 * order 540
 */
import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'

export default [
  [
    /^circle$/,
    () => ConvertToCssObject(['border-radius: 50%']),
    generatorLayer(540),
  ],
] as Rule[]
