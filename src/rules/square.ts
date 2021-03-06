import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
/**
 * order 50
 */
import { UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant'

export const square = () =>
  [
    [
      new RegExp(
        `^square-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit } = groups as { num: string; unit?: string }
        return ConvertToCssObject([
          `width: ${getUnitAndNum(unit, num)}`,
          `height: ${getUnitAndNum(unit, num)}`,
        ])
      },
      {
        ...generatorLayer(50),
        autocomplete: `square-<num>(${UNIT_ENUM_STR}|)`,
      },
    ],
  ] as Rule[]
