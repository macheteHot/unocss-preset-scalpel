import type { UNIT_ENUM } from '../constant'

export type IDirection = 't' | 'r' | 'b' | 'l' | 'x' | 'y'

export interface IScalpelOptions {
  /**
   * @default { red: '#f00', white: '#fff', black: '#000', blue: '#00f', yellow: '#ff0', transparent: 'transparent'}
   */
  colors?: Record<string, string>
  /**
   * @default 'px'
   */
  unit?: typeof UNIT_ENUM[number]
  /**
   * @default { sm: 'media (min-width: 640px)', md: 'media (min-width: 768px)', lg: 'media (min-width: 1024px)', xl: 'media (min-width: 1280px)', }
   */
  mediaQueries?: Record<string, string>
  /**
   * @default false
   */
  important?: boolean
  /**
   * @default []
   */
  ignoreRules?: string[]
  /**
   * @default { unit: 'rem', rootValue: 16, unitPrecision: 5, minPixelValue: 1, }
   */
  vToAny?: {
    /**
     * @default 'rem'
     */
    unit: typeof UNIT_ENUM[number]
    /**
     * @default 16
     */
    rootValue: number
    /**
     * @default 5
     */
    unitPrecision?: number
    /**
     * @default 1
     */
    minPixelValue?: number
  }
}
