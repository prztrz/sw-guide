import styled from 'styled-components'

export const Container = styled.header`
  height: 60px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary.main};
`

export const InnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`
