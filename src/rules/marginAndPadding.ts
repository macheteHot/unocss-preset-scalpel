import type { Rule } from 'unocss'
import {
  ConvertToCssObject,
  generatorLayer,
  getDirectionOrder,
  getUnitAndNum,
} from '../utils'
/**
 * 50 - 180 order
 */
import {
  UNIT_ENUM_STR,
  DIRECTION_MAP,
  NONNEGATIVE_NUMBER_REGEX_STR,
} from '../constant'

export const marginAndPadding = () =>
  [
    [
      // margin for all direction
      new RegExp(
        `^(?<type>m|margin)-((?<auto>auto)|(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)$`
      ),
      ({ groups }) => {
        const { auto, isMinus, num, unit } = groups as {
          auto?: string
          isMinus?: string
          num: string
          unit?: string
        }
        let value = ''
        if (auto) {
          value = 'auto'
        }
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        return ConvertToCssObject([`margin:${value}`])
      },
      generatorLayer(getDirectionOrder(50)),
    ],
    [
      // margin for xy direction
      new RegExp(
        `^(?<type>m|margin)-((?<direction>[xy])-)((?<auto>auto)|(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)$`
      ),
      ({ groups }) => {
        const { auto, isMinus, num, unit, direction } = groups as {
          auto?: string
          isMinus?: string
          num: string
          unit?: string
          direction: string
        }
        let value = ''
        if (auto) {
          value = 'auto'
        }
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        return ConvertToCssObject(
          DIRECTION_MAP.get(direction)!.reduce(
            (t: string[], c) => [...t, `margin-${c}: ${value}`],
            []
          )
        )
      },
      generatorLayer(getDirectionOrder(50, 'x')),
    ],
    [
      // margin for single direction
      new RegExp(
        `^(?<type>m|margin)-((?<direction>[tbrl])-)((?<auto>auto)|(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)$`
      ),
      ({ groups }) => {
        const { auto, isMinus, num, unit, direction } = groups as {
          auto?: string
          isMinus?: string
          num: string
          unit?: string
          direction: string
        }
        let value = ''
        if (auto) {
          value = 'auto'
        }
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        return ConvertToCssObject(
          DIRECTION_MAP.get(direction)!.reduce(
            (t: string[], c) => [...t, `margin-${c}: ${value}`],
            []
          )
        )
      },
      generatorLayer(getDirectionOrder(50, 't')),
    ],

    // -------------------------------------------------- padding --------------------------------------------------
    [
      // padding for all direction
      new RegExp(
        `^(?<type>p|padding)-((?<auto>auto)|(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)$`
      ),
      ({ groups }) => {
        const { auto, isMinus, num, unit } = groups as {
          auto?: string
          isMinus?: string
          num: string
          unit?: string
        }
        let value = ''
        if (auto) {
          value = 'auto'
        }
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        return ConvertToCssObject([`padding:${value}`])
      },
      generatorLayer(getDirectionOrder(110)),
    ],
    [
      // padding for xy direction
      new RegExp(
        `^(?<type>p|padding)-((?<direction>[xy])-)((?<auto>auto)|(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)$`
      ),
      ({ groups }) => {
        const { auto, isMinus, num, unit, direction } = groups as {
          auto?: string
          isMinus?: string
          num: string
          unit?: string
          direction: string
        }
        let value = ''
        if (auto) {
          value = 'auto'
        }
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        return ConvertToCssObject(
          DIRECTION_MAP.get(direction)!.reduce(
            (t: string[], c) => [...t, `padding-${c}: ${value}`],
            []
          )
        )
      },
      generatorLayer(getDirectionOrder(110, 'x')),
    ],
    [
      // padding for single direction
      new RegExp(
        `^(?<type>p|padding)-((?<direction>[tbrl])-)((?<auto>auto)|(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)$`
      ),
      ({ groups }) => {
        const { auto, isMinus, num, unit, direction } = groups as {
          auto?: string
          isMinus?: string
          num: string
          unit?: string
          direction: string
        }
        let value = ''
        if (auto) {
          value = 'auto'
        }
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        return ConvertToCssObject(
          DIRECTION_MAP.get(direction)!.reduce(
            (t: string[], c) => [...t, `padding-${c}: ${value}`],
            []
          )
        )
      },
      generatorLayer(getDirectionOrder(110, 't')),
    ],
  ] as Rule[]
