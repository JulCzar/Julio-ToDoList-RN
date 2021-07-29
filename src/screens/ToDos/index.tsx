import { useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Extrapolate, interpolate } from 'react-native-reanimated'

import { Header } from '../../components'
import ListItem from '../../components/ListItem'
import { header } from '../../constants'
import { Container, Content } from './styles'
import _todos from './todos.json'

const Todos: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(header.EXPANDED)
  const [todos] = useState(_todos)
  const { params } = useRoute()

  useEffect(() => {
    loadToDos()
  }, [])
  
  const loadToDos = useCallback(async () => {
    console.log({ params })
    console.log('To Dos')
  }, [])

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
        <Header title={params.name} height={headerHeight}/>
        <ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={contentContainerStyle}
        >
          {todos.map(todo => (
            <ListItem key={todo.id} data={todo}/>
          ))}
        </ScrollView>
      </Content>
    </Container>
  )
}

export default Todos