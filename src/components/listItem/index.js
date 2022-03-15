import { Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { listItemStyles } from './styles'

const ListItem = ({ functions, title, id }) => {
  return (
    <View style={listItemStyles.item}>
      <Text style={listItemStyles.title}>{title}</Text>
      <TouchableOpacity
        style={listItemStyles.deleteItemButton}
        onPress={() => {
          functions.deleteItem(id)
        }}
      >
        <Text>Borrar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListItem
