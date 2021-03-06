import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, getUnitAndNum } from '../utils'
/**
 * order 410
 */
import { UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant'

export const letterSpacing = () =>
  [
    [
      new RegExp(
        `^letter-spacing-(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { isMinus, num, unit } = groups as {
          isMinus?: string
          num: string
          unit?: string
        }

        const newNum = isMinus ? 0 - Number(num) : num
        return ConvertToCssObject([
          `letter-spacing: ${getUnitAndNum(unit, newNum)}`,
        ])
      },
      {
        ...generatorLayer(410),
        autocomplete: `letter-spacing-(m-|)<num>(${UNIT_ENUM_STR}|)`,
      },
    ],
  ] as Rule[]
