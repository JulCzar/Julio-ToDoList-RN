import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

import { Header } from '../../components'
import ListItem from '../../components/ListItem'
import { header } from '../../constants'
import { fb } from '../../services'
import _folders from './folders.json'
import { Container, Content } from './styles'

const { COLLAPSED, EXPANDED } = header

const Folders: React.FC = () => {
  const [folders] = useState(_folders)
  const navigator = useNavigation()
  const y = useSharedValue(0)

  useEffect(() => {
    loadToDos()
  }, [])

  const loadToDos = useCallback(async () => {
    const folders = []

    const folderSnapshot = await fb.collection('folders').get()

    folderSnapshot.forEach(doc => folders.push(doc.data()))
  }, [])

  const animatedStyles = useAnimatedStyle(() => ({
    height: interpolate(
      y.value,
      [0, EXPANDED - COLLAPSED],
      [EXPANDED, COLLAPSED],
      Extrapolate.CLAMP
    ),
  }))

  const navigateTo =
    (screen: string, ...data: unknown[]) => () => navigator.navigate(screen, data)

  const handleScroll = useAnimatedScrollHandler({
    onScroll({ contentOffset }) {
      y.value = contentOffset.y
    },
  })

  return (
    <Container>
      <Content>
        <Header title='Folders' style={[animatedStyles]} />
        <Animated.ScrollView
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: EXPANDED }}>
          {folders.map(folder => (
            <ListItem
              key={folder.id}
              data={folder}
              onPress={navigateTo('ToDos', folder)}
            />
          ))}
        </Animated.ScrollView>
      </Content>
    </Container>
  )
}

export default Folders
