import { UNIT_ENUM } from '../constant'

export type IDirection = 't' | 'r' | 'b' | 'l' | 'x' | 'y'

export interface IScleplOptions {
  colors?: Record<string, string>
  unit?: typeof UNIT_ENUM[number]
  mediaQueries?: Record<string, string>
  important?: boolean
  vToAny?: {
    unit: typeof UNIT_ENUM[number]
    rootValue: number
    unitPrecision?: number
    minPixelValue?: number
  }
}
