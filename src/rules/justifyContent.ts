import { Rule } from 'unocss'
import { ConvertToCssObject, generatorLayer } from '../utils'
/**
 * order 210
 */
import { JUSTIFY_CONTENT_ENUM_STR } from '../constant'

export default () =>
  [
    [
      new RegExp(`^justify-content-(?<justify>${JUSTIFY_CONTENT_ENUM_STR})$`),
      ({ groups }) => {
        const { justify } = groups as { justify: string }
        return ConvertToCssObject([`justify-content: ${justify}`])
      },
      generatorLayer(210),
    ],
  ] as Rule[]
