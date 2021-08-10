import React from 'react'
import { TouchableNativeFeedback, TouchableNativeFeedbackProps, View } from 'react-native'

import { Text } from '../../styles'
import { Container, Content } from './styles'

interface ListItemProps extends TouchableNativeFeedbackProps {
  data: any
}

const ListItem: React.FC<ListItemProps> = ({ data, ...rest }: ListItemProps) => (
  <Container>
    <TouchableNativeFeedback {...rest}>
      <Content>
        <Text>{data.name}</Text>
      </Content>
    </TouchableNativeFeedback>
  </Container>
)

export default ListItem