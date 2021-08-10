import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import { Header } from '../../components'
import ListItem from '../../components/ListItem'
import { header } from '../../constants'
import { fb } from '../../services'
import _folders from './folders.json'
import { Container, Content } from './styles'

const { EXPANDED } = header

const Folders: React.FC = () => {
  const [folders] = useState(_folders)
  const navigator = useNavigation()

  useEffect(() => {
    loadToDos()
  }, [])

  const loadToDos = useCallback(async () => {
    const folders = []

    const folderSnapshot = await fb.collection('folders').get()

    folderSnapshot.forEach(doc => folders.push(doc.data()))
  }, [])

  const navigateTo = (screen: string, ...rest: any[]) => () => navigator.navigate(screen, ...rest)

  return (
    <Container>
      <Content>
        <Header title='Folders' height={EXPANDED} />
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          {folders.map(folder => (
            <ListItem
              key={folder.id}
              data={folder}
              onPress={navigateTo('ToDos', folder)}
            />
          ))}
        </ScrollView>
      </Content>
    </Container>
  )
}

export default Folders
