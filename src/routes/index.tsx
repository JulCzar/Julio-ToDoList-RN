import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import * as screen from '../screens'
import { screenOptions } from './screenOptions'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator headerMode='none' screenOptions={screenOptions}>
      <Screen name='Home' component={screen.Home} />
    </Navigator>
  </NavigationContainer>
)

export default Routes