export const toRegexStr = (_: string[]) => _.join('|')

export const DISPLAY_ENUM = [
  'unset',
  'revert',
  'initial',
  'inherit',
  'list-item',
  'table-row',
  'table',
  'contents',
  'none',
  'flow-root',
  'inline-grid',
  'grid',
  'inline-flex',
  'flex',
  'inline-block',
  'inline',
  'block',
] as const

export const JUSTIFY_CONTENT_ENUM = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'left',
  'right',
  'space-between',
  'between',
  'space-around',
  'around',
  'space-evenly',
  'evenly',
  'stretch',
  'inherit',
  'initial',
  'unset',
  'normal',
] as const
export const ALIGN_ITEMS_ENUM = [
  'baseline',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'inherit',
  'initial',
  'normal',
  'self-end',
  'self-start',
  'start',
  'stretch',
  'unset',
] as const

export const CURSOR_ENUM = [
  'auto',
  'default',
  'none',
  'context-menu',
  'help',
  'pointer',
  'progress',
  'wait',
  'cell',
  'crosshair',
  'text',
  'vertical-text',
  'alias',
  'copy',
  'move',
  'no-drop',
  'not-allowed',
  'e-resize',
  'n-resize',
  'ne-resize',
  'nw-resize',
  's-resize',
  'se-resize',
  'sw-resize',
  'w-resize',
  'ew-resize',
  'ns-resize',
  'nesw-resize',
  'nwse-resize',
  'col-resize',
  'row-resize',
  'all-scroll',
  'zoom-in',
  'zoom-out',
  'grab',
  'grabbing',
] as const

export const UNIT_ENUM = [
  'cm',
  'mm',
  'in',
  'px',
  'pt',
  'pc',
  'em',
  'ex',
  'ch',
  'rem',
  'vw',
  'vh',
  'vmin',
  'vmax',
  'p',
  'v',
] as const

const PSEUDO_ENUM = [
  'active',
  'any-link',
  'blank',
  'checked',
  'current',
  'default',
  'defined',
  'disabled',
  'drop',
  'empty',
  'enabled',
  'first',
  'first-child',
  'first-of-type',
  'fullscreen',
  'future',
  'focus',
  'focus-visible',
  'focus-within',
  'host',
  'hover',
  'indeterminate',
  'in-range',
  'invalid',
  'last-child',
  'last-of-type',
  'left',
  'link',
  'local-link',
  'only-child',
  'only-of-type',
  'optional',
  'out-of-range',
  'past',
  'placeholder-shown',
  'read-only',
  'read-write',
  'required',
  'right',
  'root',
  'scope',
  'target',
  'target-within',
  'user-invalid',
  'valid',
  'visited',
] as const

export const GAP_ENUM = ['unset', 'initial', 'inherit', 'normal'] as const

export const VERTICAL_ALIGN_ENUM = [
  'baseline',
  'sub',
  'super',
  'text-top',
  'text-bottom',
  'middle',
  'top',
  'bottom',
  'inherit',
  'initial',
  'unset',
] as const
export const DISPLAY_STR = toRegexStr(DISPLAY_ENUM as unknown as string[])
export const PSEUDO_STR = toRegexStr(PSEUDO_ENUM as unknown as string[])
export const JUSTIFY_CONTENT_ENUM_STR = toRegexStr(
  JUSTIFY_CONTENT_ENUM as unknown as string[]
)
export const ALIGN_ITEMS_ENUM_STR = toRegexStr(
  ALIGN_ITEMS_ENUM as unknown as string[]
)
export const CURSOR_ENUM_STR = toRegexStr(CURSOR_ENUM as unknown as string[])
export const UNIT_ENUM_STR = toRegexStr(UNIT_ENUM as unknown as string[])
export const VERTICAL_ALIGN_STR = toRegexStr(
  VERTICAL_ALIGN_ENUM as unknown as string[]
)
export const GAP_ENUM_STR = toRegexStr(GAP_ENUM as unknown as string[])

export const BASE_MEDIA_QUERY = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
}

export const BASE_MEDIA_QUERY_KEY = Object.keys(BASE_MEDIA_QUERY)
export const NONNEGATIVE_NUMBER_REGEX_STR = '(0|([1-9]\\d*))(\\.\\d*[1-9])?'
export const DIRECTION_MAP = new Map<string | undefined, string[]>()
DIRECTION_MAP.set(undefined, ['']) // 全部
DIRECTION_MAP.set('x', ['left', 'right'])
DIRECTION_MAP.set('y', ['top', 'bottom'])
DIRECTION_MAP.set('t', ['top'])
DIRECTION_MAP.set('r', ['right'])
DIRECTION_MAP.set('b', ['bottom'])
DIRECTION_MAP.set('l', ['left'])
DIRECTION_MAP.set('top', ['top'])
DIRECTION_MAP.set('right', ['right'])
DIRECTION_MAP.set('bottom', ['bottom'])
DIRECTION_MAP.set('left', ['left'])
