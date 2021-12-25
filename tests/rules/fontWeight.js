export default ['font-weight', 'fw'].map((fw) =>
  [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    'normal',
    'bold',
    'bolder',
    'inherit',
    'initial',
    'lighter',
    'normal',
    'unset',
  ].map((v) => `${fw}-${v}`)
)
