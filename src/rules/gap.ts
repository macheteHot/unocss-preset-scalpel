import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
/**
 * order 580
 */
import {
  GAP_ENUM_STR,
  NONNEGATIVE_NUMBER_REGEX_STR,
  UNIT_ENUM_STR,
} from '../constant'

export default [
  [
    new RegExp(
      `^gap-(((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)|(?<value>${GAP_ENUM_STR}))$`
    ),
    ({ groups }) => {
      const { num, unit, value } = groups as {
        num?: string
        unit?: string
        value: string
      }
      const newValue = value || getUnitAndNum(unit, num)
      return ConvertToCssObject([
        `column-gap: ${newValue}`,
        `row-gap: ${newValue}`,
      ])
    },
    generatorLayer(580),
  ],
] as Rule[]
