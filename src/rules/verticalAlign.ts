import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
/**
 * order 570
 */
import {
  VERTICAL_ALIGN_STR,
  UNIT_ENUM_STR,
  NONNEGATIVE_NUMBER_REGEX_STR,
} from '../constant'

export const verticalAlign = () =>
  [
    [
      new RegExp(
        `^vertical-align-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)|${VERTICAL_ALIGN_STR})$`
      ),
      ({ groups }) => {
        const { value, num, unit } = groups as {
          value: string
          num?: string
          unit?: string
        }
        const newValue = num ? `${getUnitAndNum(unit, num)}` : value
        return ConvertToCssObject([`vertical-align: ${newValue}`])
      },
      {
        ...generatorLayer(570),
        autocomplete: [
          `vertical-align-<num>(${UNIT_ENUM_STR}|)`,
          `vertical-align-(${VERTICAL_ALIGN_STR})`,
        ],
      },
    ],
  ] as Rule[]
