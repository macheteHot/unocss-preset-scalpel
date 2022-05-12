import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'

import { UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant'

export const minMaxHeightWidth = () =>
  [
    // max height
    [
      new RegExp(
        `^(max-h|max-height)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit } = groups as { num: string; unit?: string }
        return ConvertToCssObject([`max-height:${getUnitAndNum(unit, num)}`])
      },
      {
        ...generatorLayer(30),
        autocomplete: `(max-h|max-height)-<num>(${UNIT_ENUM_STR})`,
      },
    ],
    // min height
    [
      new RegExp(
        `^(min-h|min-height)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit } = groups as { num: string; unit?: string }
        return ConvertToCssObject([`min-height: ${getUnitAndNum(unit, num)}`])
      },
      {
        ...generatorLayer(40),
        autocomplete: `(min-h|min-height)-<num>(${UNIT_ENUM_STR})`,
      },
    ],

    // max width
    [
      new RegExp(
        `^(max-w|max-width)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit } = groups as { num: string; unit?: string }
        return ConvertToCssObject([`max-width: ${getUnitAndNum(unit, num)}`])
      },
      {
        ...generatorLayer(31),
        autocomplete: `(max-w|max-width)-<num>(${UNIT_ENUM_STR})`,
      },
    ],
    // min width
    [
      new RegExp(
        `^(min-w|min-width)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit } = groups as { num: string; unit?: string }
        return ConvertToCssObject([`min-width: ${getUnitAndNum(unit, num)}`])
      },
      {
        ...generatorLayer(41),
        autocomplete: `(min-w|min-width)-<num>(${UNIT_ENUM_STR})`,
      },
    ],
  ] as Rule[]
