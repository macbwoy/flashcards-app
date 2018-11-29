import { StyleSheet } from 'react-native'
import { primary, background } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    paddingTop: 50,
    paddingBottom: 150,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  headerText: {
    fontSize: 34,
    textAlign: 'center',
    marginBottom: 20,
    color: primary
  }
})
