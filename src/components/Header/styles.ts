import { Text, View } from 'react-native'
import styled from 'styled-components'

import { colors, typography } from '../../constants'
import { vMin } from '../../constants/viewPortUnits'

export const Container = styled(View)`
  align-items: center;
  background: ${colors.backgroundDark};
  height: ${vMin(60)}px;
  justify-content: center;
  width: ${vMin(100)}px;
`

export const Title = styled(Text)`
  font-size: ${typography.lg}px;
  color: #fff;
`