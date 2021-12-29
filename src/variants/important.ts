import type { IScalpelOptions } from 'src/types'
import type { VariantFunction } from 'unocss'

export function getVariantImportant(
  config: Required<IScalpelOptions>
): VariantFunction {
  return (matcher) => {
    const flag = matcher.endsWith('!')
    const isImportant = flag ? !config.important : config.important
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
  }
}
