import React from 'react'

import { Container, Title } from './styles'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)

export default Header