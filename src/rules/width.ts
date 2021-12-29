import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
/**
 * order 10
 */
import { UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant'

export const width = () =>
  [
    [
      new RegExp(
        `^(w|width)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit } = groups as { num: string; unit?: string }
        return ConvertToCssObject([`width: ${getUnitAndNum(unit, num)}`])
      },
      generatorLayer(10),
    ],
  ] as Rule[]
