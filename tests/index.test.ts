import { describe, test, expect, beforeAll } from 'bun:test'
import { createGenerator, type UnoGenerator } from 'unocss'
import { presetScalpel } from '../src/main'

let uno: UnoGenerator

beforeAll(async () => {
  uno = await createGenerator({ presets: [presetScalpel()] })
})

async function css(classes: string) {
  const { css } = await uno.generate(classes, { preflights: false })
  return css
}

describe('width', () => {
  test('w-100', async () => expect(await css('w-100')).toContain('width: 100px'))
  test('w-100p', async () => expect(await css('w-100p')).toContain('width: 100%'))
  test('w-50vw', async () => expect(await css('w-50vw')).toContain('width: 50vw'))
  test('width-200', async () => expect(await css('width-200')).toContain('width: 200px'))
  test('invalid w-abc returns empty', async () => expect(await css('w-abc')).toBe(''))
})

describe('height', () => {
  test('h-48', async () => expect(await css('h-48')).toContain('height: 48px'))
  test('h-100p', async () => expect(await css('h-100p')).toContain('height: 100%'))
})

describe('margin', () => {
  test('m-16', async () => expect(await css('m-16')).toContain('margin:16px'))
  test('m-t-8', async () => expect(await css('m-t-8')).toContain('margin-top: 8px'))
  test('m-x-12', async () => {
    const r = await css('m-x-12')
    expect(r).toContain('margin-left: 12px')
    expect(r).toContain('margin-right: 12px')
  })
  test('m-m-10 negative', async () => expect(await css('m-m-10')).toContain('margin:-10px'))
  test('m-auto', async () => expect(await css('m-auto')).toContain('margin:auto'))
})

describe('padding', () => {
  test('p-16', async () => expect(await css('p-16')).toContain('padding:16px'))
  test('p-t-8', async () => expect(await css('p-t-8')).toContain('padding-top: 8px'))
  test('p-x-12', async () => {
    const r = await css('p-x-12')
    expect(r).toContain('padding-left: 12px')
    expect(r).toContain('padding-right: 12px')
  })
})

describe('flexDirection', () => {
  test('flex-column includes display:flex', async () => {
    const r = await css('flex-column')
    expect(r).toContain('display: flex')
    expect(r).toContain('flex-direction: column')
  })
  test('flex-row', async () => expect(await css('flex-row')).toContain('flex-direction: row'))
  test('flex-row-reverse', async () => expect(await css('flex-row-reverse')).toContain('flex-direction: row-reverse'))
})

describe('flexWrap', () => {
  test('flex-wrap includes display:flex', async () => {
    const r = await css('flex-wrap')
    expect(r).toContain('display: flex')
    expect(r).toContain('flex-wrap: wrap')
  })
  test('flex-nowrap', async () => expect(await css('flex-nowrap')).toContain('flex-wrap: nowrap'))
})

describe('flexJustAli', () => {
  test('flex-center-center', async () => {
    const r = await css('flex-center-center')
    expect(r).toContain('display: flex')
    expect(r).toContain('justify-content: center')
    expect(r).toContain('align-items: center')
  })
  test('flex-between-center', async () => {
    const r = await css('flex-between-center')
    expect(r).toContain('justify-content: space-between')
    expect(r).toContain('align-items: center')
  })
})

describe('flexNum', () => {
  test('flex-1', async () => expect(await css('flex-1')).toContain('flex: 1'))
  test('flex-auto', async () => expect(await css('flex-auto')).toContain('flex: auto'))
})

describe('display', () => {
  test('d-flex', async () => expect(await css('d-flex')).toContain('display: flex'))
  test('d-none', async () => expect(await css('d-none')).toContain('display: none'))
  test('display-grid', async () => expect(await css('display-grid')).toContain('display: grid'))
})

describe('gap', () => {
  test('gap-8', async () => {
    const r = await css('gap-8')
    expect(r).toContain('column-gap: 8px')
    expect(r).toContain('row-gap: 8px')
  })
  test('gap-normal', async () => expect(await css('gap-normal')).toContain('column-gap: normal'))
})

describe('borderRadius', () => {
  test('br-4', async () => expect(await css('br-4')).toContain('border-radius:4px'))
  test('br-50p', async () => expect(await css('br-50p')).toContain('border-radius:50%'))
  test('br-t-8 (both top)', async () => {
    const r = await css('br-t-8')
    expect(r).toContain('border-top-left-radius:8px')
    expect(r).toContain('border-top-right-radius:8px')
  })
  test('br-tl-4 (single)', async () => expect(await css('br-tl-4')).toContain('border-top-left-radius:4px'))
})

describe('color', () => {
  test('c-red', async () => expect(await css('c-red')).toContain('color: rgba(255,0,0,1)'))
  test('bg-fff', async () => expect(await css('bg-fff')).toContain('background-color: rgba(255,255,255,1)'))
  test('c-red-50 opacity', async () => expect(await css('c-red-50')).toContain('rgba(255,0,0,0.5)'))
  test('border-000', async () => expect(await css('border-000')).toContain('border-color: rgba(0,0,0,1)'))
})

describe('fontSize', () => {
  test('fs-14', async () => expect(await css('fs-14')).toContain('font-size: 14px'))
  test('font-size-1rem', async () => expect(await css('font-size-1rem')).toContain('font-size: 1rem'))
})

describe('fontWeight', () => {
  test('fw-bold', async () => expect(await css('fw-bold')).toContain('font-weight: bold'))
  test('fw-700', async () => expect(await css('fw-700')).toContain('font-weight: 700'))
})

describe('position', () => {
  test('position-relative', async () => expect(await css('position-relative')).toContain('position: relative'))
  test('position-absolute', async () => expect(await css('position-absolute')).toContain('position: absolute'))
})

describe('zIndex', () => {
  test('z-index-10', async () => expect(await css('z-index-10')).toContain('z-index: 10'))
  test('z-index-m-1 negative', async () => expect(await css('z-index-m-1')).toContain('z-index: -1'))
})

describe('opacity', () => {
  test('opacity-50', async () => expect(await css('opacity-50')).toContain('opacity: 0.5'))
  test('opacity-100', async () => expect(await css('opacity-100')).toContain('opacity: 1'))
})

describe('cursor', () => {
  test('cursor-pointer', async () => expect(await css('cursor-pointer')).toContain('cursor: pointer'))
  test('cursor-not-allowed', async () => expect(await css('cursor-not-allowed')).toContain('cursor: not-allowed'))
})

describe('userSelect', () => {
  test('select-none', async () => expect(await css('select-none')).toContain('user-select: none'))
})

describe('overflow', () => {
  test('overflow-x-hidden', async () => expect(await css('overflow-x-hidden')).toContain('overflow-x: hidden'))
  test('overflow-y-auto', async () => expect(await css('overflow-y-auto')).toContain('overflow-y: auto'))
})

describe('pseudo', () => {
  test('hover:c-red', async () => {
    const r = await css('hover:c-red')
    expect(r).toContain(':hover')
    expect(r).toContain('color: rgba(255,0,0,1)')
  })
})

describe('vToAny', () => {
  test('w-16v converts to rem', async () => {
    const u = await createGenerator({
      presets: [presetScalpel({ vToAny: { unit: 'rem', rootValue: 16, unitPrecision: 5, minPixelValue: 1 } })]
    })
    const { css } = await u.generate('w-16v', { preflights: false })
    expect(css).toContain('1.00000rem')
  })
})
