import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 590
 */
import { toRegexStr } from '../constant'

const list = [
  'visible',
  'hidden',
  'collapse',
  'inherit',
  'initial',
  'revert',
  'unset',
]

export default [
  [
    new RegExp(`^visibility-(?<value>${toRegexStr(list)})$`),
    ({ groups }) => {
      const { value } = groups as { value: string }
      return ConvertToCssObject([`visibility-${value}: ${value}`])
    },
    generatorLayer(590),
  ],
] as Rule[]
