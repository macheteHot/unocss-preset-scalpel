/**
 * order 200
 */
import type { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
import { JUSTIFY_CONTENT_ENUM_STR, ALIGN_ITEMS_ENUM_STR } from '../constant'

export const flexJustAli = () =>
  [
    [
      new RegExp(
        `^flex-(?<justify>${JUSTIFY_CONTENT_ENUM_STR})-(?<align>${ALIGN_ITEMS_ENUM_STR})$`
      ),
      ({ groups }) => {
        const { justify, align } = groups as { justify: string; align: string }

        const newJustify = () => {
          if (justify === 'between') {
            return 'space-between'
          }
          if (justify === 'around') {
            return 'space-around'
          }
          if (justify === 'evenly') {
            return 'space-evenly'
          }
          return justify
        }
        return ConvertToCssObject([
          'display: flex',
          `justify-content: ${newJustify()}`,
          `align-items: ${align}`,
        ])
      },
      {
        ...generatorLayer(200),
        autocomplete: `flex-(${JUSTIFY_CONTENT_ENUM_STR})-(${ALIGN_ITEMS_ENUM_STR})`,
      },
    ],
  ] as Rule[]
