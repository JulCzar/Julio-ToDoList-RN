import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { LogBox } from 'react-native'

LogBox.ignoreLogs(['Setting a timer'])

import Routes from './src/routes'

const App: React.FC = () => (
  <>
    <StatusBar style='auto'/>
    <Routes/>
  </>
)

export default App