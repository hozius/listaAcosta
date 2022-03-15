import { StyleSheet } from 'react-native'

export const listItemStyles = StyleSheet.create({
  item: {
    height: 80,
    backgroundColor: '#21212121',
    marginVertical: '3%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    paddingVertical: '2%',
    paddingLeft: 10,
  },
  deleteItemButton: {
    backgroundColor: 'red',
    height: '100%',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
