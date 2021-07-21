import { StyleSheet, View } from 'react-native'
import styled from 'styled-components'

import { colors } from '../../constants'

export const Container = styled(View)`
  background: ${colors.backgroundDark};
  border-radius: 50px;
  overflow: hidden;
`

export const ButtonView = styled(View)`
  padding: 5px 15px;
`

export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: 'hidden',
  }
})