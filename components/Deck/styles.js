import { StyleSheet } from 'react-native'
import { background, primary, tenary } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    padding: 100,
    paddingTop: 50,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  deleteDeckText: {
    color: '#E3446C',
    textAlign: 'center',
    fontSize: 20
  },
  deckHeader: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckHeaderText: {
    fontSize: 30,
    color: primary
  },
  deckSubHeaderText: {
    fontSize: 16,
    color: tenary
  }
})
