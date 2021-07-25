import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import { Header } from '../../components'
import ListItem from '../../components/ListItem'
import { Container, Content } from './styles'
import _todos from './todos.json'

const Todos: React.FC = () => {
  const [todos] = useState(_todos)

  useEffect(() => {
    loadToDos()
  }, [])
  
  const loadToDos = useCallback(async () => {
    console.log('Todos')
  }, [])

  return (
    <Container>
      <Content>
        <Header title='To Dos'/>
        <ScrollView onScroll={({ nativeEvent }) => {
          console.log(nativeEvent.contentOffset.y)
        }}>
          {todos.map(todo => (
            <ListItem key={todo.id} data={todo}/>
          ))}
        </ScrollView>
      </Content>
    </Container>
  )
}

export default Todos