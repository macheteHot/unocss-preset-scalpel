/**
 * order 340
 */
import type { Rule } from 'unocss'
import { CURSOR_ENUM_STR } from '../constant'
import { ConvertToCssObject, generatorLayer } from '../utils'

export const cursor = () =>
  [
    [
      new RegExp(`^cursor-(?<value>${CURSOR_ENUM_STR})$`),
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`cursor: ${value}`])
      },
      generatorLayer(340),
    ],
  ] as Rule[]
