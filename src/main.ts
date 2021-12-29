import { Preset } from 'unocss'
import { PSEUDO_STR } from './constant'
import { IScalpelOptions } from './types'
import { setConfig as setConfigToUtils } from './utils'

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
import flexNum from './rules/flexNum'
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

const presetConfig: Required<IScalpelOptions> = {
  unit: 'px',
  important: false,
  colors: {
    red: '#f00',
    white: '#fff',
    black: '#000',
    blue: '#00f',
    yellow: '#ff0',
    transparent: 'transparent',
  },
  mediaQueries: {
    sm: 'media (min-width: 640px)',
    md: 'media (min-width: 768px)',
    lg: 'media (min-width: 1024px)',
    xl: 'media (min-width: 1280px)',
  },
  vToAny: {
    unit: 'rem',
    rootValue: 16,
    unitPrecision: 5,
    minPixelValue: 1,
  },
}

function setConfig(config: Partial<IScalpelOptions>): void {
  const {
    colors,
    mediaQueries,
    vToAny,
    unit = 'px',
    important = false,
  } = config
  Object.assign(presetConfig, { unit, important })
  if (colors) {
    Object.assign(presetConfig.colors, colors)
  }
  if (mediaQueries) {
    Object.assign(presetConfig.mediaQueries, mediaQueries)
  }
  if (vToAny) {
    Object.assign(presetConfig.vToAny, vToAny)
  }
  setConfigToUtils(presetConfig)
}

/**
 * @public
 */
export function presetScalpel(options?: IScalpelOptions): Preset {
  setConfig(options ?? {})

  return {
    name: 'unocss-preset-scalpel',
    enforce: 'post',
    variants: [
      // MEDIA Query
      (matcher) => {
        const [, mediaQuery = ''] =
          matcher.match(
            new RegExp(
              `^(${Object.keys(presetConfig.mediaQueries).join('|')})@`
            )
          ) ?? []
        if (!mediaQuery) {
          return matcher
        }
        return {
          matcher: matcher.replace(/^.+?@(.*)$/, '$1'),
          parent: [`@${presetConfig.mediaQueries[mediaQuery]}`, 999999],
        }
      },
      // PSEUDO
      (matcher) => {
        const [, pseudo = ''] =
          matcher.match(new RegExp(`^(${PSEUDO_STR}):`)) ?? []
        if (!pseudo) {
          return matcher
        }
        return {
          matcher: matcher.replace(/^.+?:(.*)$/, '$1'),
          selector: (s) => `${s}:${pseudo}`,
        }
      },
      // important
      (matcher) => {
        const flag = matcher.endsWith('!')
        const isImportant = flag
          ? !presetConfig.important
          : presetConfig.important
        return {
          matcher: flag ? matcher.substring(0, matcher.length - 1) : matcher,
          body: (body) => {
            body.forEach((v) => {
              if (v[1]) {
                v[1] += isImportant ? ' !important' : ''
              }
            })
            return body
          },
        }
      },
    ],
    rules: [
      alignItems(),
      border(),
      borderRadius(),
      borderStyle(),
      boxSizing(),
      circle(),
      color(presetConfig),
      columnGap(),
      cursor(),
      display(),
      flexBasis(),
      flexDirection(),
      flexJustAli(),
      flexNum(),
      flexShrinkAndGrow(),
      flexWrap(),
      fontSize(),
      fontWeight(),
      gap(),
      height(),
      justifyContent(),
      letterSpacing(),
      lineHeight(),
      marginAndPadding(),
      minMaxHeightWidth(),
      objectFit(),
      opacity(),
      orientation(),
      overflow(),
      position(),
      rowGap(),
      square(),
      textAlign(),
      textAlignLast(),
      textDecoration(),
      textEllipsis(),
      userSelect(),
      verticalAlign(),
      visibility(),
      width(),
      wordBreak(),
      zIndex(),
    ].flat(1),
  }
}
