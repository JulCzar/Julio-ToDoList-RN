import React from 'react'
import { View } from 'react-native'

import { Text } from '../../styles'
import { Container } from './styles'

interface ListItemProps {
  children: React.ReactNode
}

const ListItem: React.FC<ListItemProps> = ({ children }: ListItemProps) => (
  <Container>
    <Text>{children}</Text>
  </Container>
)

export default ListItem