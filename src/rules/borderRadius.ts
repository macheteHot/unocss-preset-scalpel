/**
 * order 530
 */
import type { Rule } from 'unocss'
import { assertUnreachable } from '../utils/typeTools'
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
    // for both sides
    [
      new RegExp(
        `^(border-radius|br)-((?<direction>[trbl])-)(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit, direction } = groups as {
          num: string
          unit?: string
          direction: 't' | 'r' | 'b' | 'l'
        }
        switch (direction) {
          case 't':
            return ConvertToCssObject([
              `border-top-left-radius:${getUnitAndNum(unit, num)}`,
              `border-top-right-radius:${getUnitAndNum(unit, num)}`,
            ])
          case 'r':
            return ConvertToCssObject([
              `border-top-right-radius:${getUnitAndNum(unit, num)}`,
              `border-bottom-right-radius:${getUnitAndNum(unit, num)}`,
            ])
          case 'b':
            return ConvertToCssObject([
              `border-bottom-right-radius:${getUnitAndNum(unit, num)}`,
              `border-bottom-left-radius:${getUnitAndNum(unit, num)}`,
            ])
          case 'l':
            return ConvertToCssObject([
              `border-top-left-radius:${getUnitAndNum(unit, num)}`,
              `border-bottom-left-radius:${getUnitAndNum(unit, num)}`,
            ])
          default:
            assertUnreachable(direction)
            return {}
        }
      },
      {
        ...generatorLayer(531),
        autocomplete: [
          `(border-radius|br)-(t|b|r|l)-<num>`,
          `(border-radius|br)-(t|b|r|l)-<num>-(${UNIT_ENUM_STR})`,
        ],
      },
    ],
    // for single border radius
    [
      new RegExp(
        `^(border-radius|br)-((?<direction>(tl|lt|tr|rt|bl|lb|br|rb))-)(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      ({ groups }) => {
        const { num, unit, direction } = groups as {
          num: string
          unit?: string
          direction: 'tl' | 'lt' | 'tr' | 'rt' | 'bl' | 'lb' | 'br' | 'rb'
        }
        switch (direction) {
          case 'tl':
          case 'lt':
            return ConvertToCssObject([
              `border-top-left-radius:${getUnitAndNum(unit, num)}`,
            ])
          case 'tr':
          case 'rt':
            return ConvertToCssObject([
              `border-top-right-radius:${getUnitAndNum(unit, num)}`,
            ])
          case 'bl':
          case 'lb':
            return ConvertToCssObject([
              `border-bottom-left-radius:${getUnitAndNum(unit, num)}`,
            ])
          case 'br':
          case 'rb':
            return ConvertToCssObject([
              `border-bottom-right-radius:${getUnitAndNum(unit, num)}`,
            ])
          default:
            assertUnreachable(direction)
            return {}
        }
      },
      {
        ...generatorLayer(532),
        autocomplete: [
          `(border-radius|br)-(tl|lt|tr|rt|bl|lb|br|rb)-<num>`,
          `(border-radius|br)-(tl|lt|tr|rt|bl|lb|br|rb)-<num>-(${UNIT_ENUM_STR})`,
        ],
      },
    ],
  ] as Rule[]
