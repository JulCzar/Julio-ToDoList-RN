import { Text as TextRN } from 'react-native'
import styled from 'styled-components'

import { typography } from '../constants'

export const Text = styled(TextRN)`
  color: #fffc;
  font-size: ${typography.xxs}px;
`