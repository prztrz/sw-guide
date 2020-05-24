import * as React from 'react'

import Text, { TEXT_SIZES, TEXT_WRAPPERS } from 'components/Text'

import { Container, InnerContainer } from './styles'

const Header = () => (
  <Container>
    <InnerContainer>
      <Text as={TEXT_WRAPPERS.H1} size={TEXT_SIZES.HEADER_NORMAL}>
        Star Wars Guide
      </Text>
    </InnerContainer>
  </Container>
)

export default Header
