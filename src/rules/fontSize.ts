/**
 * order 370
 */
import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
import { UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant'

export default [
  [
    new RegExp(
      `^(font-size|fs)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
    ),
    ({ groups }) => {
      const { num, unit } = groups as { num: string; unit?: string }
      return ConvertToCssObject([`font-size: ${getUnitAndNum(unit, num)}`])
    },
    generatorLayer(370),
  ],
] as Rule[]
