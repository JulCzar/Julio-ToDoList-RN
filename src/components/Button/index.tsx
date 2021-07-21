import React from 'react'
import { TouchableNativeFeedback, TouchableNativeFeedbackProps } from 'react-native'

import { Text } from '../../styles'
import { ButtonView, Container } from './styles'

interface ButtonProps extends TouchableNativeFeedbackProps {
  children: string,
  icon?: string
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => (
  <Container>
    <TouchableNativeFeedback {...rest}>
      <ButtonView>
        <Text>{children}</Text>
      </ButtonView>
    </TouchableNativeFeedback>
  </Container>
)

export default Button