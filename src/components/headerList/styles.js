import { StyleSheet } from 'react-native'

export const listStyle = StyleSheet.create({
  headerContainerStyle: {
    height: '35%',
  },
  inputContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '2%',
  },
  inputStyle: {
    borderWidth: 1,
    width: '70%',
    padding: '2%',
    borderRadius: 15,
    marginHorizontal: '2%',
  },
  buttonStyle: {
    width: '20%',
    height: 60,
    backgroundColor: 'green',
    marginHorizontal: '2%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStyle: {
    fontSize: 30,
    color: 'white',
  },
  textHeaderStyle: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
    alignSelf: 'center',
  },
})
