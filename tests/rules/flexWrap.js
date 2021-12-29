export default ['inherit', 'initial', 'nowrap', 'wrap', 'wrap-reverse'].map(
  (v) => ['flex', 'flex-wrap'].map((prefix) => `${prefix}-${v}`)
)
