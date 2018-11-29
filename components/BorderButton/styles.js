import { StyleSheet } from 'react-native'
import { primary } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    marginBottom: 20
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: primary,
    textAlign: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    color: primary,
    overflow: 'hidden',
    fontSize: 20
  }
})
