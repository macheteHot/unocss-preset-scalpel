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
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        // last set auto
        if (auto) {
          value = 'auto'
        }
        return ConvertToCssObject([`margin:${value}`])
      },
      {
        ...generatorLayer(getDirectionOrder(50)),
        autocomplete: [
          `(m|margin)-auto`,
          `(m|margin)-(m-|)<num>(${UNIT_ENUM_STR}|)`,
        ],
      },
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
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        if (auto) {
          value = 'auto'
        }
        return ConvertToCssObject(
          DIRECTION_MAP.get(direction)!.reduce(
            (t: string[], c) => [...t, `margin-${c}: ${value}`],
            []
          )
        )
      },
      {
        ...generatorLayer(getDirectionOrder(50, 'x')),
        autocomplete: [
          `(m|margin)-(x|y)-auto`,
          `(m|margin)-(x|y)-(m-|)<num>(${UNIT_ENUM_STR}|)`,
        ],
      },
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
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        if (auto) {
          value = 'auto'
        }
        return ConvertToCssObject(
          DIRECTION_MAP.get(direction)!.reduce(
            (t: string[], c) => [...t, `margin-${c}: ${value}`],
            []
          )
        )
      },
      {
        ...generatorLayer(getDirectionOrder(50, 't')),
        autocomplete: [
          `(m|margin)-(t|b|r|l)-auto`,
          `(m|margin)-(t|b|r|l)-(m-|)<num>(${UNIT_ENUM_STR}|)`,
        ],
      },
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
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        if (auto) {
          value = 'auto'
        }
        return ConvertToCssObject([`padding:${value}`])
      },
      {
        ...generatorLayer(getDirectionOrder(110)),
        autocomplete: [
          `(p|padding)-auto`,
          `(p|padding)-(m-|)<num>(${UNIT_ENUM_STR}|)`,
        ],
      },
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

        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        if (auto) {
          value = 'auto'
        }
        return ConvertToCssObject(
          DIRECTION_MAP.get(direction)!.reduce(
            (t: string[], c) => [...t, `padding-${c}: ${value}`],
            []
          )
        )
      },
      {
        ...generatorLayer(getDirectionOrder(110, 'x')),
        autocomplete: [
          `(p|padding)-(x|y)-auto`,
          `(p|padding)-(x|y)-(m-|)<num>(${UNIT_ENUM_STR}|)`,
        ],
      },
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
        if (isMinus) {
          value = `${getUnitAndNum(unit, 0 - Number(num))}`
        } else {
          value = `${getUnitAndNum(unit, num)}`
        }
        if (auto) {
          value = 'auto'
        }
        return ConvertToCssObject(
          DIRECTION_MAP.get(direction)!.reduce(
            (t: string[], c) => [...t, `padding-${c}: ${value}`],
            []
          )
        )
      },
      {
        ...generatorLayer(getDirectionOrder(110, 't')),
        autocomplete: [
          `(p|padding)-(t|b|r|l)-auto`,
          `(p|padding)-(t|b|r|l)-(m-|)<num>(${UNIT_ENUM_STR}|)`,
        ],
      },
    ],
  ] as Rule[]
