import React from 'react'
import { ViewProps } from 'react-native'

import { Container, Title } from './styles'

interface HeaderProps extends ViewProps {
  title: string,
  height?: number
}

const Header: React.FC<HeaderProps> = ({ title, height = 50,...rest }: HeaderProps) => (
  <Container {...{height, ...rest}}>
    <Title>{title}</Title>
  </Container>
)

export default Header