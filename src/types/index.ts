import type { UNIT_ENUM } from '../constant'

export type IDirection = 't' | 'r' | 'b' | 'l' | 'x' | 'y'

export interface IScalpelOptions {
  colors?: Record<string, string>
  unit?: typeof UNIT_ENUM[number]
  mediaQueries?: Record<string, string>
  important?: boolean
  ignoreRules?: string[]
  vToAny?: {
    unit: typeof UNIT_ENUM[number]
    rootValue: number
    unitPrecision?: number
    minPixelValue?: number
  }
}
