import { View } from 'react-native'
import styled from 'styled-components'

import { colors } from '../../constants'

export const Container = styled(View)`
  flex: 1;
  background: ${colors.backgroundDark};
  justify-content: flex-start;
`

export const Content = styled(View)`
  background: ${colors.backgroundNormal};
  flex: 1;
`

export const Line = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
`