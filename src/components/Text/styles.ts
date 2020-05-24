import styled from 'styled-components'

import { breakpoints } from 'theme'

import consts, { TextProps } from './constants'

export const Container = styled.p<TextProps>`
  font-family: ${({ theme, type }) => theme.fontFamilies[type || 'normal']};
  color: ${({ theme, color }) => theme.colors.ink[color || 'primary']};
  font-weight: ${({ weight }) =>
    weight === consts.TEXT_WEIGHTS.BOLD ? 600 : 400};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case consts.TEXT_SIZES.SMALL:
        return theme.fontSizes.xSmall
      case consts.TEXT_SIZES.NORMAL:
        return theme.fontSizes.small
      case consts.TEXT_SIZES.LARGE:
        return theme.fontSizes.normal
      case consts.TEXT_SIZES.HEADER_SMALL:
        return theme.fontSizes.large
      case consts.TEXT_SIZES.HEADER_NORMAL:
        return theme.fontSizes.headerSmall
      case consts.TEXT_SIZES.HEADER_LARGE:
        return theme.fontSizes.headerNormal
      default:
        return theme.fontSizes.small
    }
  }};
  line-height: 1.6;

  @media (min-width: ${() => breakpoints.md}px) {
    font-size: ${({ theme, size }) => theme.fontSizes[size || 'normal']};
  }
`
