import { StatusBar } from 'expo-status-bar'
import React from 'react'

import Routes from './src/routes'

const App: React.FC = () => (
  <>
    <StatusBar hidden style='auto'/>
    <Routes/>
  </>
)

export default App