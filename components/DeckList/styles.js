import { StyleSheet } from 'react-native'
import { primary, lightTenary, lightSecondary, lightPrimary } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#D9D9E8',
    alignItems: 'stretch'
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'stretch',
    marginBottom: 10,
    padding: 20,
    backgroundColor: lightTenary,
    borderRadius: 5,
    borderBottomWidth: 0,
    shadowColor: lightSecondary,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2
  },
  deckHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: lightPrimary
  },
  deckSubHeaderText: {
    fontSize: 18,
    textAlign: 'center',
    color: primary
  }
})
