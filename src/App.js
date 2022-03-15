import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native'

import ListScreen from './screens/listScreen'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [data, setData] = useState([])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const itemsFunctions = {
    addItem: (item) => {
      let tempArray = [...data, item]
      setData(tempArray)
    },
    deleteItem: (id) => {
      let tempArray = data.filter((item) => {
        return item['id'] != id
      })
      setData(tempArray)
    },
  }

  return (
    <SafeAreaView style={{ ...backgroundStyle, height: '85%' }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ListScreen
        style={backgroundStyle}
        functions={itemsFunctions}
        nameList={'Lista de items'}
        dataList={data}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
