import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { listStyle } from './styles'

const HeaderList = (props) => {
  const { functions, nameList } = props
  const [textValue, setTextValue] = useState('')

  let idrandom = Date.now()
  return (
    <View style={listStyle.headerContainerStyle}>
      <View>
        <Text style={listStyle.textHeaderStyle}>{nameList}</Text>
      </View>
      <View style={listStyle.inputContainerStyle}>
        <TextInput
          style={listStyle.inputStyle}
          onChangeText={setTextValue}
          value={textValue}
        ></TextInput>
        <TouchableOpacity
          style={listStyle.buttonStyle}
          onPress={() => {
            setTextValue('');
            if(textValue != '') 
              functions.addItem({ id: idrandom, title: textValue });
          }}
        >
          <Text style={listStyle.textButtonStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderList
