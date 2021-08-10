import { RouteProp, useRoute } from '@react-navigation/native'
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
import { RootStackParamList } from '../../models'
import { Container, Content } from './styles'
import _todos from './todos.json'

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'ToDos'>

const { COLLAPSED, EXPANDED } = header

const Todos: React.FC = () => {
  const height = useSharedValue(0)
  const [todos] = useState(_todos)
  const { params } = useRoute<ProfileScreenRouteProp>()
  const [folder] = params

  useEffect(() => {
    loadToDos()
  }, [])

  const loadToDos = useCallback(async () => {
    console.log({ params })
    console.log('To Dos')
  }, [])

  const animatedStyles = useAnimatedStyle(() => ({
    height: interpolate(
      height.value,
      [0, EXPANDED - COLLAPSED],
      [EXPANDED, COLLAPSED],
      Extrapolate.CLAMP
    ),
  }))

  const handleScroll = useAnimatedScrollHandler({
    onScroll({ contentOffset }) {
      height.value = contentOffset.y
    },
  })

  const contentContainerStyle = { paddingTop: header.EXPANDED }

  return (
    <Container>
      <Content>
        <Header title={folder.name} style={[animatedStyles]} />
        <Animated.ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={contentContainerStyle}>
          {todos.map(todo => (
            <ListItem key={todo.id} data={todo} />
          ))}
        </Animated.ScrollView>
      </Content>
    </Container>
  )
}

export default Todos
