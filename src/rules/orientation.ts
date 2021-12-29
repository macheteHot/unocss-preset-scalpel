import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
/**
 * order 310
 */
import {
  UNIT_ENUM_STR,
  NONNEGATIVE_NUMBER_REGEX_STR,
  DIRECTION_MAP,
} from '../constant'

export const orientation = () =>
  [
    [
      new RegExp(
        `^(?<direction>[trbl]|top|right|bottom|left)-(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { direction, isMinus, num, unit } = groups as {
          direction: string
          isMinus?: string
          num: string
          unit?: string
        }
        const newNum = isMinus ? `-${num}` : num

        // is only t r b l
        const newDirection =
          direction.length === 1 ? DIRECTION_MAP.get(direction)![0]! : direction

        return ConvertToCssObject([
          `${newDirection}: ${getUnitAndNum(unit, newNum)}`,
        ])
      },
      generatorLayer(310),
    ],
  ] as Rule[]
