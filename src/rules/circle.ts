/**
 * order 540
 */
import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'

export const circle = () =>
  [
    [
      /^circle$/,
      () => ConvertToCssObject(['border-radius: 50%']),
      {
        ...generatorLayer(540),
        autocomplete: 'circle',
      },
    ],
  ] as Rule[]
