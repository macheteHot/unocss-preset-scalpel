/**
 * order 582
 */
import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
import {
  NONNEGATIVE_NUMBER_REGEX_STR,
  UNIT_ENUM_STR,
  GAP_ENUM_STR,
} from '../constant'

export const columnGap = () =>
  [
    [
      new RegExp(
        `^c(olumn)?-gap-(((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)|(?<value>${GAP_ENUM_STR}))$`
      ),
      ({ groups }) => {
        const {
          num = Infinity,
          unit,
          value,
        } = groups as { num?: string; unit?: string; value?: string }
        const newValue = value || `${getUnitAndNum(unit, num)}`
        return ConvertToCssObject([`column-gap: ${newValue}`])
      },
      {
        ...generatorLayer(582),
        autocomplete: [
          `(c|column)-gap-<num>-(${UNIT_ENUM_STR})`,
          `(c|column)-gap-(${GAP_ENUM_STR})`,
        ],
      },
    ],
  ] as Rule[]
