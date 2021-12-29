import type { IScalpelOptions } from 'src/types'
import type { VariantFunction } from 'unocss'

export function getVariantMediaQuery(
  config: Required<IScalpelOptions>
): VariantFunction {
  return (matcher) => {
    const [, mediaQuery = ''] =
      matcher.match(
        new RegExp(`^(${Object.keys(config.mediaQueries).join('|')})@`)
      ) ?? []

    if (!mediaQuery) {
      return matcher
    }
    return {
      matcher: matcher.replace(/^.+?@(.*)$/, '$1'),
      parent: [`@${config.mediaQueries[mediaQuery]}`, 999999],
    }
  }
}
