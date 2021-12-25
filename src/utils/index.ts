import { CSSObject } from 'unocss'
import Decimal from 'decimal.js'
import { IDirection, IScleplOptions } from '../types'

let presetConfig: Required<IScleplOptions>

export function setConfig(config: Required<IScleplOptions>) {
  presetConfig = config
}
export function isFunction(payload: unknown): boolean {
  return Object.prototype.toString.call(payload) === '[object Function]'
}

export function isObject(payload: unknown): boolean {
  return Object.prototype.toString.call(payload) === '[object Object]'
}

export function getDirectionOrder(
  order: number,
  direction?: IDirection
): number {
  if (!direction) {
    return order
  }
  switch (direction) {
    case 'x':
      return order + 10
    case 'y':
      return order + 20
    case 't':
      return order + 30
    case 'b':
      return order + 40
    case 'r':
      return order + 50
    case 'l':
      return order + 60
    default:
      return order
  }
}

export function generatorLayer(order: number) {
  return { layer: String(order).padStart(5, '0') }
}

function v2any(num: string) {
  const newNum = Number(num)
  const { rootValue, unitPrecision, minPixelValue } = presetConfig.vToAny
  if (newNum < minPixelValue!) {
    return num
  }
  return new Decimal(newNum).div(rootValue).toFixed(unitPrecision)
}

export function getUnitAndNum(
  unit: string | number | undefined,
  num: number | string | undefined
): string {
  const defaultUnit = presetConfig.unit
  let newUnit = unit
  let newNum = num
  if (Number(num) === 0) {
    newUnit = ''
  } else if (unit === 'p') {
    newUnit = '%'
  } else if (unit === undefined) {
    newUnit = defaultUnit
  }
  if (newUnit === 'v') {
    newUnit = presetConfig.vToAny.unit
    newNum = v2any(num as string)
  }
  return `${newNum}${newUnit}`
}

export function ConvertToCssObject(cssList: string[]): CSSObject {
  return Object.fromEntries(
    cssList.map((css) => {
      const [key, value] = css.split(':') as [string, string]
      return [key, presetConfig.important ? `${value} !important` : value]
    })
  )
}

function radix16(value: string) {
  return parseInt(value, 16)
}

export function textToRgbText(str: string, opacity = 1) {
  // is hex text or word
  const hex = /^#?([a-fA-F0-9]{8}|[a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(str)
    ? str.replace(/^#/, '')
    : presetConfig.colors[str]!.replace(/^#/, '')
  if (hex === 'transparent') {
    return 'transparent'
  }
  if (hex.length === 6) {
    const reg = /[a-fA-F0-9]{2}/g
    return `rgba(${hex.match(reg)!.map(radix16).join(',')},${opacity})`
  }
  if (hex.length === 3) {
    return `rgba(${hex
      .split('')
      .map((x) => radix16(x.repeat(2)))
      .join(',')},${opacity})`
  }
  if (hex.length === 8) {
    const reg = /[a-fA-F0-9]{2}/g
    const [r, g, b, a] = hex.match(reg) as [string, string, string, string]
    const opacityA = Number(
      Number(Math.round(parseInt(a, 16)) / 255).toFixed(2)
    )
    return `rgba(${[r, g, b].map(radix16).join(',')},${opacityA})`
  }
  return ''
}
