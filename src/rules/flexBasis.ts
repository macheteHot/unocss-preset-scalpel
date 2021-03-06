/**
 * order 280
 */
import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
import { UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant'

export const flexBasis = () =>
  [
    [
      new RegExp(
        `^flex-basis-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)|initial|inherit|auto)$`
      ),
      ({ groups }) => {
        const { value, num, unit } = groups as {
          value: string
          num?: string
          unit?: string
        }
        const newValue = num ? getUnitAndNum(unit, num) : value
        return ConvertToCssObject([`flex-basis: ${newValue}`])
      },
      {
        ...generatorLayer(280),
        autocomplete: [
          `flex-basis-<num>(${UNIT_ENUM_STR}|)`,
          `flex-basis-(initial|inherit|auto)`,
        ],
      },
    ],
  ] as Rule[]
