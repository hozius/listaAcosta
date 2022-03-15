import { FlatList, Text, View } from 'react-native'

import HeaderList from '../../components/headerList'
import ListItem from '../../components/listItem'
import React from 'react'

const ListScreen = (props) => {
  const { functions, nameList, dataList } = props

  const renderItem = ({ item }) => (
    <ListItem title={item.title} functions={functions} id={item.id} />
  )
  return (
    <View>
      <HeaderList nameList={nameList} functions={functions}></HeaderList>
      <View style={{ height: '70%' }}>
        <FlatList data={dataList} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </View>
  )
}

export default ListScreen
