import type { Preset, Rule } from 'unocss'
import type { IScalpelOptions } from './types'
import { setConfig as setConfigToUtils } from './utils'
import {
  getVariantImportant,
  getVariantMediaQuery,
  getVariantPseudo,
} from './variants'
import * as rules from './rules'

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
  ignoreRules: [],
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
    ignoreRules = [],
    unit = 'px',
    important = false,
  } = config
  Object.assign(presetConfig, { unit, important, ignoreRules })
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
  // const rules = rules
  //   .filter((item) => !presetConfig.ignoreRules.includes(item.name))
  //   .map((item) => item.value(presetConfig))
  //   .flat(1)

  return {
    name: 'unocss-preset-scalpel',
    enforce: 'post',
    variants: [
      getVariantMediaQuery(presetConfig),
      getVariantPseudo(),
      getVariantImportant(presetConfig),
    ],
    rules: Object.entries(rules)
      .reduce<Rule[][]>((t, c) => {
        const [name, value] = c
        return presetConfig.ignoreRules.includes(name)
          ? t
          : [...t, value(presetConfig)]
      }, [])
      .flat(1),
  }
}
