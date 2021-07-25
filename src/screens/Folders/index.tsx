import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Extrapolate, interpolate } from 'react-native-reanimated'

import { Header } from '../../components'
import ListItem from '../../components/ListItem'
import { vMin } from '../../constants/viewPortUnits'
import _folders from './folders.json'
import { Container, Content } from './styles'

enum header {
  EXPANDED = vMin(100),
  COLLAPSED = 50
}

const Folders: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(header.EXPANDED)
  const [folders] = useState(_folders)
  const navigator = useNavigation()

  useEffect(() => {
    loadToDos()
  }, [])
  
  const loadToDos = useCallback(async () => {
    console.log('Folders')
  }, [])

  const navigateTo = (screen: string, data?: any) => () => navigator.navigate(screen, data)
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { nativeEvent } = event
    
    setHeaderHeight(interpolate(
      nativeEvent.contentOffset.y,
      [0, header.EXPANDED-header.COLLAPSED],
      [header.EXPANDED, header.COLLAPSED],
      Extrapolate.CLAMP
    ))
  }

  const contentContainerStyle = { paddingTop: header.EXPANDED }
  return (
    <Container>
      <Content>
        <Header title='Folders' height={headerHeight}/>
        <ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={contentContainerStyle}
        >
          {folders.map(folder => (
            <ListItem key={folder.id} data={folder} onPress={navigateTo('ToDos')}/>
          ))}
        </ScrollView>
      </Content>
    </Container>
  )
}

export default Folders