import { Text } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components'

import { colors, header, typography } from '../../constants'
import { vMin } from '../../constants/viewPortUnits'

interface ContainerProps {
  height?: number
}

export const Container = styled(Animated.View)<ContainerProps>`
  align-items: center;
  background: ${props => (props.height===header.COLLAPSED?colors.backgroundDark:'transparent')};
  min-height: ${header.COLLAPSED}px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: ${vMin(100)}px;
`

export const Title = styled(Text)`
  font-size: ${typography.lg}px;
  color: #fff;
`