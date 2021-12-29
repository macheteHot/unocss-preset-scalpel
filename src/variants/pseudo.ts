import type { VariantFunction } from 'unocss'
import { PSEUDO_STR } from '../constant'

export function getVariantPseudo(): VariantFunction {
  return (matcher) => {
    const [, pseudo = ''] = matcher.match(new RegExp(`^(${PSEUDO_STR}):`)) ?? []
    if (!pseudo) {
      return matcher
    }
    return {
      matcher: matcher.replace(/^.+?:(.*)$/, '$1'),
      selector: (s) => `${s}:${pseudo}`,
    }
  }
}
