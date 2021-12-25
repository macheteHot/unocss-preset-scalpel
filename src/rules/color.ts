/**
 * order 520 460 + 60
 */
import { IScleplOptions } from 'src/types'
import { Rule } from 'unocss'
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

export default (config: Required<IScleplOptions>) => {
  const colorKeysStr = Object.keys(config.colors).join('|')
  return [
    [
      // color  with not opacity
      new RegExp(
        `^(?<type>color|c|text)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})$`
      ),
      handleColor,
      generatorLayer(900),
    ],
    [
      // color  with opacity
      new RegExp(
        `^(?<type>color|c|text)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})-(?<opacity>1|([1-9]\\d?))$`
      ),
      handleColor,
      generatorLayer(910),
    ],
    [
      // background with not opacity
      new RegExp(
        `^(?<type>bg|background)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})$`
      ),
      handleColor,
      generatorLayer(920),
    ],
    [
      // background with opacity
      new RegExp(
        `^(?<type>bg|background)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})-(?<opacity>1|([1-9]\\d?))$`
      ),
      handleColor,
      generatorLayer(930),
    ],
    [
      // border color with not opacity
      new RegExp(
        `^(?<type>border-c|border-color)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})$`
      ),
      handleColor,
      generatorLayer(940),
    ],
    [
      // border color with opacity
      new RegExp(
        `^(?<type>border-c|border-color)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${colorKeysStr})-(?<opacity>1|([1-9]\\d?))$`
      ),
      handleColor,
      generatorLayer(950),
    ],
  ] as Rule[]
}
