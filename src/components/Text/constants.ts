import { Values } from 'utils/types'

const TEXT_TYPES = {
  NORMAL: 'normal',
  HEADLINE: 'headline',
} as const

const TEXT_SIZES = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  HEADER_SMALL: 'headerSmall',
  HEADER_NORMAL: 'headerNormal',
  HEADER_LARGE: 'headerLarge',
} as const

const TEXT_WEIGHTS = {
  NORMAL: 'normal',
  BOLD: 'bold',
} as const

const TEXT_COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ACCENT: 'accent',
  ERROR: 'error',
} as const

export const TEXT_WRAPPERS = {
  P: 'p',
  DIV: 'div',
  SPAN: 'span',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
} as const

export type TextProps = {
  type?: Values<typeof TEXT_TYPES>
  size?: Values<typeof TEXT_SIZES>
  weight?: Values<typeof TEXT_WEIGHTS>
  color?: Values<typeof TEXT_COLORS>
  as?: Values<typeof TEXT_WRAPPERS>
  children: React.ReactNode
}

export default {
  TEXT_TYPES,
  TEXT_SIZES,
  TEXT_WEIGHTS,
  TEXT_COLORS,
  TEXT_WRAPPERS,
}
