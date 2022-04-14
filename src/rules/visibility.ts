import type { Rule } from 'unocss'
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

export const visibility = () =>
  [
    [
      new RegExp(`^visibility-(?<value>${toRegexStr(list)})$`),
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`visibility: ${value}`])
      },
      generatorLayer(590),
    ],
  ] as Rule[]
