import type { UNIT_ENUM } from '../constant'

export type IDirection = 't' | 'r' | 'b' | 'l' | 'x' | 'y'

export interface IScalpelOptions {
  colors?: Record<string, string>
  /**
   * @defaultValue 'px'
   */
  unit?: typeof UNIT_ENUM[number]
  mediaQueries?: Record<string, string>
  /**
   * @defaultValue false
   */
  important?: boolean
  /**
   * @defaultValue []
   */
  ignoreRules?: string[]
  vToAny?: {
    /**
     * @defaultValue 'rem'
     */
    unit: typeof UNIT_ENUM[number]
    /**
     * @defaultValue 16
     */
    rootValue: number
    /**
     * @defaultValue 5
     */
    unitPrecision?: number
    /**
     * @defaultValue 1
     */
    minPixelValue?: number
  }
}
