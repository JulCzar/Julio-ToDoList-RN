import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { Header } from '../../components'
import Button from '../../components/Button'
import ListItem from '../../components/ListItem'
import { Text } from '../../styles'
import _folders from './folders.json'
import { Container, Content, Line } from './styles'

const HelloWorld: React.FC = () => {
  const [folders] = useState(_folders)

  useEffect(() => {
    loadToDos()
  }, [])
  
  const loadToDos = useCallback(async () => {
    console.log('Home')
  }, [])

  return (
    <Container>
      <Header title='To Dos'/>
      <Content>
        <Line>
          <Text>Pastas</Text>
          <Button>Nova Pasta</Button>
        </Line>
        <FlatList
          data={folders}
          renderItem={({item}) => (
            <ListItem>{item.name}</ListItem>
          )}
        />
      </Content>
    </Container>
  )
}

export default HelloWorld