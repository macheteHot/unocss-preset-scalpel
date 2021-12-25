import { Preset } from 'unocss'
import { PSEUDO_STR } from './constant'
import { IScleplOptions } from './types'
import { getConfig, setConfig } from './config'

import alignItems from './rules/alignItems'
import border from './rules/border'
import borderRadius from './rules/borderRadius'
import borderStyle from './rules/borderStyle'
import boxSizing from './rules/boxSizing'
import circle from './rules/circle'
import color from './rules/color'
import columnGap from './rules/columnGap'
import cursor from './rules/cursor'
import display from './rules/display'
import flexBasis from './rules/flexBasis'
import flexDirection from './rules/flexDirection'
import flexJustAli from './rules/flexJustAli'
import flexShrinkAndGrow from './rules/flexShrinkAndGrow'
import flexWrap from './rules/flexWrap'
import fontSize from './rules/fontSize'
import fontWeight from './rules/fontWeight'
import gap from './rules/gap'
import height from './rules/height'
import justifyContent from './rules/justifyContent'
import letterSpacing from './rules/letterSpacing'
import lineHeight from './rules/lineHeight'
import marginAndPadding from './rules/marginAndPadding'
import minMaxHeightWidth from './rules/minMaxHeightWidth'
import objectFit from './rules/objectFit'
import opacity from './rules/opacity'
import orientation from './rules/orientation'
import overflow from './rules/overflow'
import position from './rules/position'
import rowGap from './rules/rowGap'
import square from './rules/square'
import textAlign from './rules/textAlign'
import textAlignLast from './rules/textAlignLast'
import textDecoration from './rules/textDecoration'
import textEllipsis from './rules/textEllipsis'
import userSelect from './rules/userSelect'
import verticalAlign from './rules/verticalAlign'
import visibility from './rules/visibility'
import width from './rules/width'
import wordBreak from './rules/wordBreak'
import zIndex from './rules/zIndex'
/**
 * @public
 */
export function presetScalpel(options?: IScleplOptions): Preset {
  setConfig(options ?? {})

  return {
    name: 'unocss-preset-scalpel',
    enforce: 'post',
    variants: [
      // MEDIA Query
      (matcher) => {
        const MEIDA_QUERY_STR = Object.keys(getConfig('mediaQueries')).join('|')
        const [, meidaQuery = ''] =
          matcher.match(new RegExp(`^(${MEIDA_QUERY_STR})@`)) ?? []
        if (!meidaQuery) {
          return matcher
        }
        return {
          matcher: matcher.replace(/^.+?@(.*)$/, '$1'),
          parent: [`@media ${getConfig('mediaQueries')[meidaQuery]}`, 999999],
        }
      },
      // PSEUDO
      (matcher) => {
        const [, psedu = ''] =
          matcher.match(new RegExp(`^(${PSEUDO_STR}):`)) ?? []
        if (!psedu) {
          return matcher
        }
        return {
          matcher: matcher.replace(/^.+?:(.*)$/, '$1'),
          selector: (s) => `${s}:${psedu}`,
        }
      },
    ],
    rules: [
      alignItems,
      border,
      borderRadius,
      borderStyle,
      boxSizing,
      circle,
      color,
      columnGap,
      cursor,
      display,
      flexBasis,
      flexDirection,
      flexJustAli,
      flexShrinkAndGrow,
      flexWrap,
      fontSize,
      fontWeight,
      gap,
      height,
      justifyContent,
      letterSpacing,
      lineHeight,
      marginAndPadding,
      minMaxHeightWidth,
      objectFit,
      opacity,
      orientation,
      overflow,
      position,
      rowGap,
      square,
      textAlign,
      textAlignLast,
      textDecoration,
      textEllipsis,
      userSelect,
      verticalAlign,
      visibility,
      width,
      wordBreak,
      zIndex,
    ].flat(1),
  }
}
