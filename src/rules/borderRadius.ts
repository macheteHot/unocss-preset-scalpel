/**
 * order 530
 */
import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
import { UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant'

export const borderRadius = () =>
  [
    [
      new RegExp(
        `^(border-radius|br)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit } = groups as { num: string; unit?: string }
        return ConvertToCssObject([`border-radius:${getUnitAndNum(unit, num)}`])
      },
      {
        ...generatorLayer(530),
        autocomplete: [
          `(border-radius|br)-<num>`,
          `(border-radius|br)-<num>-(${UNIT_ENUM_STR})`,
        ],
      },
    ],
  ] as Rule[]
