/* eslint-disable import/extensions */
import * as assert from 'uvu/assert'
import { suite } from 'uvu'
import { createGenerator } from 'unocss'
import { presetScalpel } from '../dist/index.cjs'
import { genSnapshot } from './utils.js'
import { PSEUDO_LIST, BASE_MEDIA_QUERY } from './constant.js'

const update = process.argv.includes('-u')
const mediaQueryKeys = Object.keys(BASE_MEDIA_QUERY)
const scalpel = suite('scalpel')

// set config for scalpel
const generator = createGenerator({
  presets: [
    presetScalpel({
      mediaQueries: {
        supportGrid: 'supports (display: grid)',
      },
      colors: {
        diyColor: '#30336b',
      },
      important: true,
      vToAny: {
        unit: 'rem',
        rootValue: 10,
        unitPrecision: 5,
        minPixelValue: 1,
      },
    }),
  ],
})

// add key to test
mediaQueryKeys.push('supportGrid')

const testConfigs = [
  { name: 'alignItems', input: import('./rules/alignItems.js') },
  { name: 'border', input: import('./rules/border.js') },
  { name: 'borderRadius', input: import('./rules/borderRadius.js') },
  { name: 'borderStyle', input: import('./rules/borderStyle.js') },
  { name: 'boxSizing', input: import('./rules/boxSizing.js') },
  { name: 'circle', input: import('./rules/circle.js') },
  { name: 'color', input: import('./rules/color.js') },
  { name: 'columnGap', input: import('./rules/columnGap.js') },
  { name: 'cursor', input: import('./rules/cursor.js') },
  { name: 'display', input: import('./rules/display.js') },
  { name: 'flexBasis', input: import('./rules/flexBasis.js') },
  { name: 'flexDirection', input: import('./rules/flexDirection.js') },
  { name: 'flexJustAli', input: import('./rules/flexJustAli.js') },
  { name: 'flexNum', input: import('./rules/flexNum.js') },
  { name: 'flexShrinkAndGrow', input: import('./rules/flexShrinkAndGrow.js') },
  { name: 'flexWrap', input: import('./rules/flexWrap.js') },
  { name: 'fontSize', input: import('./rules/fontSize.js') },
  { name: 'fontWeight', input: import('./rules/fontWeight.js') },
  { name: 'gap', input: import('./rules/gap.js') },
  { name: 'height', input: import('./rules/height.js') },
  { name: 'justifyContent', input: import('./rules/justifyContent.js') },
  { name: 'letterSpacing', input: import('./rules/letterSpacing.js') },
  { name: 'lineHeight', input: import('./rules/lineHeight.js') },
  { name: 'marginAndPadding', input: import('./rules/marginAndPadding.js') },
  { name: 'minMaxHeightWidth', input: import('./rules/minMaxHeightWidth.js') },
  { name: 'objectFit', input: import('./rules/objectFit.js') },
  { name: 'opacity', input: import('./rules/opacity.js') },
  { name: 'orientation', input: import('./rules/orientation.js') },
  { name: 'overflow', input: import('./rules/overflow.js') },
  { name: 'position', input: import('./rules/position.js') },
  { name: 'rowGap', input: import('./rules/rowGap.js') },
  { name: 'square', input: import('./rules/square.js') },
  { name: 'textAlign', input: import('./rules/textAlign.js') },
  { name: 'textAlignLast', input: import('./rules/textAlignLast.js') },
  { name: 'textDecoration', input: import('./rules/textDecoration.js') },
  { name: 'textEllipsis', input: import('./rules/textEllipsis.js') },
  { name: 'userSelect', input: import('./rules/userSelect.js') },
  { name: 'verticalAlign', input: import('./rules/verticalAlign.js') },
  { name: 'visibility', input: import('./rules/visibility.js') },
  { name: 'width', input: import('./rules/width.js') },
  { name: 'wordBreak', input: import('./rules/wordBreak.js') },
  { name: 'zIndex', input: import('./rules/zIndex.js') },
]

for (let i = testConfigs.length - 1; i >= 0; i--) {
  const { name, input } = testConfigs[i]
  scalpel(name, async () => {
    const result = await input

    const baseList = result.default.flat(Infinity)

    const pseduList = PSEUDO_LIST.map((psedu) =>
      baseList.map((base) => `${psedu}:${base}`)
    ).flat(Infinity)

    const mediaQueryList = mediaQueryKeys
      .map((mq) => baseList.map((base) => `${mq}@${base}`))
      .flat(Infinity)

    const mediaQueryWithPseudoList = mediaQueryKeys
      .map((mq) =>
        PSEUDO_LIST.map((psedu) =>
          baseList.map((base) => `${mq}@${psedu}:${base}`)
        )
      )
      .flat(Infinity)

    // ------------------------- generate css -------------------------
    const { css } = await generator.generate(
      `<div class="${baseList
        .concat(pseduList, mediaQueryList, mediaQueryWithPseudoList)
        .join(' ')}"></div>`
    )

    const expected = genSnapshot(css, name, update)
    assert.snapshot(css, expected)
  })
}

scalpel.run()
