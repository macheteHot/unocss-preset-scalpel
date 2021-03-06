import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
/**
 * order 330
 */
import { UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant'

export const lineHeight = () =>
  [
    [
      new RegExp(
        `^(lh|line-height)-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)|normal|unset|inherit|initial)$`
      ),
      ({ groups }) => {
        const { value, num, unit } = groups as {
          value: string
          num?: string
          unit?: string
        }
        const newValue = num ? `${getUnitAndNum(unit, num)}` : value
        return ConvertToCssObject([`line-height: ${newValue}`])
      },
      {
        ...generatorLayer(330),
        autocomplete: [
          `(lh|line-height)-<num>(${UNIT_ENUM_STR}|)`,
          `(lh|line-height)-(normal|unset|inherit|initial)`,
        ],
      },
    ],
  ] as Rule[]
