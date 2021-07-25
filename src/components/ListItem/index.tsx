import React from 'react'
import { TouchableNativeFeedback, TouchableNativeFeedbackProps, View } from 'react-native'

import { Text } from '../../styles'
import { Container } from './styles'

interface ListItemProps extends TouchableNativeFeedbackProps {
  data: {
    name: string
  }
}

const ListItem: React.FC<ListItemProps> = ({ data, ...rest }: ListItemProps) => (
  <View>
    <TouchableNativeFeedback {...rest}>
      <Container>
        <Text>{data.name}</Text>
      </Container>
    </TouchableNativeFeedback>
  </View>
)

export default ListItem