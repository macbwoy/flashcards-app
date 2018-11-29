import { StyleSheet } from 'react-native'
import { primary } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: primary,
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 8,
    paddingLeft: 20,
    overflow: 'hidden'
  },
  textInput: {
    color: primary,
    height: 40,
    fontSize: 20
  }
})
