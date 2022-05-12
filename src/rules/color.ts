/**
 * order 520 460 + 60
 */
import type { IScalpelOptions } from 'src/types'
import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer, textToRgbText } from '../utils'
import { assertUnreachable } from '../utils/typeTools'

const colorType = [
  'color',
  'c',
  'text',
  'bg',
  'background',
  'border-color',
  'border-c',
  'border',
] as const

function getPrefix(type: typeof colorType[number]) {
  switch (type) {
    case 'c':
    case 'color':
    case 'text':
      return 'color'
    case 'bg':
    case 'background':
      return 'background-color'
    case 'border':
    case 'border-c':
    case 'border-color':
      return 'border-color'
    default:
      return assertUnreachable(type)
  }
}

function handleColor({ groups }: RegExpMatchArray) {
  const { type, color, opacity } = groups as {
    type: typeof colorType[number]
    color: string
    opacity?: string
  }
  const newOpacity =
    opacity === undefined ? 1 : Number((Number(opacity) * 0.01).toFixed(2))
  const newColor = textToRgbText(color, newOpacity)
  const prefix = getPrefix(type)
  return ConvertToCssObject([`${prefix}: ${newColor}`])
}

export const color = (config: Required<IScalpelOptions>) => {
  const colorKeysStr = Object.keys(config.colors).join('|')
  return [
    [
      // color  with not opacity
      new RegExp(
        `^(?<type>color|c|text)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})$`
      ),
      handleColor,
      {
        ...generatorLayer(900),
        autocomplete: '(color|c|text)-(red|blue|#F00|F00)',
      },
    ],
    [
      // color  with opacity
      new RegExp(
        `^(?<type>color|c|text)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})-(?<opacity>1|([1-9]\\d?))$`
      ),
      handleColor,
      {
        ...generatorLayer(910),
        autocomplete: '(color|c|text)-(red|blue|#F00|F00)-<num>',
      },
    ],
    [
      // background with not opacity
      new RegExp(
        `^(?<type>bg|background)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})$`
      ),
      handleColor,
      {
        ...generatorLayer(920),
        autocomplete: '(bg|background)-(red|blue|#F00|F00)',
      },
    ],
    [
      // background with opacity
      new RegExp(
        `^(?<type>bg|background)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})-(?<opacity>1|([1-9]\\d?))$`
      ),
      handleColor,
      {
        ...generatorLayer(930),
        autocomplete: '(bg|background)-(red|blue|#F00|F00)-<num>',
      },
    ],
    [
      // border color with not opacity
      new RegExp(
        `^(?<type>border-c|border-color|border)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})$`
      ),
      handleColor,
      {
        ...generatorLayer(940),
        autocomplete: '(border-c|border-color|border)-(red|blue|#F00|F00)',
      },
    ],
    [
      // border color with opacity
      new RegExp(
        `^(?<type>border-c|border-color|border)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})-(?<opacity>1|([1-9]\\d?))$`
      ),
      handleColor,
      {
        ...generatorLayer(950),
        autocomplete:
          '(border-c|border-color|border)-(red|blue|#F00|F00)-<num>',
      },
    ],
  ] as Rule[]
}
