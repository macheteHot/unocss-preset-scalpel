/**
 * order 370
 */
import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
import { UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant'

export const fontSize = () =>
  [
    [
      new RegExp(
        `^(font-size|fs)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit } = groups as { num: string; unit?: string }
        return ConvertToCssObject([`font-size: ${getUnitAndNum(unit, num)}`])
      },
      {
        ...generatorLayer(370),
        autocomplete: `(font-size|fs)-(${NONNEGATIVE_NUMBER_REGEX_STR})(${UNIT_ENUM_STR}|)`,
      },
    ],
  ] as Rule[]
