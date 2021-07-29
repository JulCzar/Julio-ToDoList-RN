import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Extrapolate, interpolate } from 'react-native-reanimated'

import { Header } from '../../components'
import ListItem from '../../components/ListItem'
import { header } from '../../constants'
import { fb } from '../../services'
import _folders from './folders.json'
import { Container, Content } from './styles'

const { COLLAPSED, EXPANDED } = header

const Folders: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(EXPANDED)
  const [folders] = useState(_folders)
  const navigator = useNavigation()

  useEffect(() => {
    loadToDos()
  }, [])
  
  const loadToDos = useCallback(async () => {
    const folders = []

    const folderSnapshot = await fb.collection('folders').get()

    folderSnapshot.forEach(
      doc => folders.push(
        doc.data()
      )
    )
  }, [])

  const navigateTo = (screen: string, data?: any) => () => navigator.navigate(screen, data)
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { nativeEvent } = event
    
    setHeaderHeight(interpolate(
      nativeEvent.contentOffset.y,
      [0, EXPANDED-COLLAPSED],
      [EXPANDED, COLLAPSED],
      Extrapolate.CLAMP
    ))
  }

  const contentContainerStyle = { paddingTop: EXPANDED }
  
  return (
    <Container>
      <Content>
        <Header title='Folders' height={headerHeight}/>
        <ScrollView
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={contentContainerStyle}
        >
          {folders.map(folder => (
            <ListItem key={folder.id} data={folder} onPress={navigateTo('ToDos', folder)}/>
          ))}
        </ScrollView>
      </Content>
    </Container>
  )
}

export default Folders