import { CSSObject } from 'unocss'
import { getConfig } from '../config'
import { IDirection } from '../types'

function accDiv(arg1: number, arg2: number): number {
  let t1 = 0
  let t2 = 0
  try {
    t1 = arg1.toString().split('.')[1]?.length ?? 0
  } catch (e) {
    console.error(e)
  }
  try {
    t2 = arg2.toString().split('.')[1]?.length ?? 0
  } catch (e) {
    console.error(e)
  }
  const r1 = Number(arg1.toString().replace('.', ''))
  const r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * 10 ** (t2 - t1)
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
  const { rootValue, unitPrecision, minPixelValue } = getConfig('vToAny')
  if (newNum < minPixelValue!) {
    return newNum
  }
  return Number(accDiv(newNum, rootValue).toFixed(unitPrecision))
}

export function getUnitAndNum(
  unit: string | number | undefined,
  num: number | string | undefined
): string {
  const defaultUnit = getConfig('unit')
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
    newUnit = getConfig('vToAny').unit
    newNum = v2any(num as string)
  }
  return `${newNum}${newUnit}`
}

export function ConvertToCssObject(cssList: string[]): CSSObject {
  const isImportant = getConfig('important')
  return Object.fromEntries(
    cssList.map((css) => {
      const [key, value] = css.split(':') as [string, string]
      return [key, isImportant ? `${value} !important` : value]
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
    : getConfig('colors')[str]!.replace(/^#/, '')
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
