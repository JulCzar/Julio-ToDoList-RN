import React from 'react'

import { Container, Title } from './styles'

interface HeaderProps {
  title: string,
  height: number
}

const Header: React.FC<HeaderProps> = ({ title, ...rest }: HeaderProps) => (
  <Container {...rest}>
    <Title>{title}</Title>
  </Container>
)

export default Header