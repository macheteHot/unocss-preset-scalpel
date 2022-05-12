import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 240
 */
export const flexWrap = () =>
  [
    [
      /^flex(-wrap)?-(?<value>inherit|initial|nowrap|wrap|wrap-reverse)$/,
      ({ groups }) => {
        const { value } = groups as { value: string }
        return ConvertToCssObject([`flex-wrap: ${value}`])
      },
      {
        ...generatorLayer(240),
        autocomplete: 'flex(-wrap|)-(inherit|initial|nowrap|wrap|wrap-reverse)',
      },
    ],
  ] as Rule[]
