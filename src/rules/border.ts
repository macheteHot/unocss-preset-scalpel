/**
 * order 520 460 + 60
 */
import type { Rule } from 'unocss'
import {
  generatorLayer,
  getUnitAndNum,
  getDirectionOrder,
  ConvertToCssObject,
} from '../utils'
import type { IDirection } from '../types'

import type { UNIT_ENUM } from '../constant'
import {
  UNIT_ENUM_STR,
  DIRECTION_MAP,
  NONNEGATIVE_NUMBER_REGEX_STR,
} from '../constant'

const getOrder = (direction?: IDirection) => getDirectionOrder(460, direction)

function getCss(direction: IDirection | undefined, value: string) {
  return DIRECTION_MAP.get(direction)!.reduce((t: string[], c: string) => {
    if (c) {
      return [...t, `border-${c}-width: ${value}`]
    }
    return [...t, `border-width: ${value}`]
  }, [])
}

function handleBorder({ groups }: RegExpMatchArray) {
  const { direction, num, unit } = groups as {
    direction?: IDirection
    num: string
    unit?: typeof UNIT_ENUM[number]
  }
  return ConvertToCssObject(getCss(direction, getUnitAndNum(unit, num)))
}

export const border = () =>
  [
    [
      new RegExp(
        `^(border|border-width|border-w)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      handleBorder,
      generatorLayer(getOrder()),
    ],
    [
      new RegExp(
        `^(border|border-width|border-w)-(?<direction>[xy])-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      handleBorder,
      generatorLayer(getOrder('x')),
    ],
    [
      new RegExp(
        `^(border|border-width|border-w)-(?<direction>[trbl])-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`
      ),
      handleBorder,
      generatorLayer(getOrder('t')),
    ],
  ] as Rule[]
