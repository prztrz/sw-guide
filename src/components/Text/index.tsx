import * as React from 'react'

import consts, { TextProps } from './constants'
import { Container } from './styles'

const {
  TEXT_TYPES,
  TEXT_SIZES,
  TEXT_WEIGHTS,
  TEXT_COLORS,
  TEXT_WRAPPERS,
} = consts

const Text = ({
  type = TEXT_TYPES.NORMAL,
  size = TEXT_SIZES.NORMAL,
  weight = TEXT_WEIGHTS.NORMAL,
  color = TEXT_COLORS.PRIMARY,
  as = TEXT_WRAPPERS.P,
  children,
}: TextProps) => (
  <Container as={as} type={type} size={size} weight={weight} color={color}>
    {children}
  </Container>
)

export { TEXT_TYPES, TEXT_SIZES, TEXT_WEIGHTS, TEXT_COLORS, TEXT_WRAPPERS }

export default Text
