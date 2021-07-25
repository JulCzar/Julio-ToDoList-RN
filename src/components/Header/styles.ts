import { Text } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components'

import { colors, typography } from '../../constants'
import { vMin } from '../../constants/viewPortUnits'

interface ContainerProps {
  height: number
}

export const Container = styled(Animated.View)<ContainerProps>`
  align-items: center;
  background: ${colors.backgroundDark};
  height: ${props => props.height}px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: ${vMin(100)}px;
  z-index: 1;
`

export const Title = styled(Text)`
  font-size: ${typography.lg}px;
  color: #fff;
`