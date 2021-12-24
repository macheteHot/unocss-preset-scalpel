import { IScleplOptions } from 'src/types'

const defaultConfig: Required<IScleplOptions> = {
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
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  vToAny: {
    unit: 'rem',
    rootValue: 16,
    unitPrecision: 5,
    minPixelValue: 1,
  },
}

export function setConfig(config: Partial<IScleplOptions>): void {
  const {
    colors,
    mediaQueries,
    vToAny,
    unit = 'px',
    important = false,
  } = config
  Object.assign(defaultConfig, { unit, important })
  if (colors) {
    Object.assign(defaultConfig.colors, colors)
  }
  if (mediaQueries) {
    Object.assign(defaultConfig.mediaQueries, mediaQueries)
  }
  if (vToAny) {
    Object.assign(defaultConfig.vToAny, vToAny)
  }
}

export function getConfig<T extends keyof Required<IScleplOptions>>(key: T) {
  return defaultConfig[key]
}
