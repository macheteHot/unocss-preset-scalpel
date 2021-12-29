import type { IScalpelOptions } from 'src/types'
import type { VariantFunction } from 'unocss'

export function getVariantMediaQuery(
  config: Required<IScalpelOptions>
): VariantFunction {
  return (matcher) => {
    /**
     * ! not use regexp star limit ^ to match
     * because in attributify value is not start with media query
     * just replace media query to empty string
     */
    const [, mediaQuery = ''] =
      matcher.match(
        new RegExp(`(${Object.keys(config.mediaQueries).join('|')})@`)
      ) ?? []
    if (!mediaQuery) {
      return { matcher }
    }
    return {
      matcher: matcher.replace(new RegExp(`${mediaQuery}@`), ''),
      parent: [`@${config.mediaQueries[mediaQuery]}`, 999999],
    }
  }
}
