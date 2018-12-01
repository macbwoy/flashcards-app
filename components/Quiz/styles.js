import { StyleSheet } from 'react-native'
import { background, primary, secondary, tenary } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    paddingTop: 50,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  deleteDeckText: {
    color: '#E3446C',
    textAlign: 'center',
    fontSize: 20
  },
  textHeader: {
    paddingTop: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    color: primary,
    paddingBottom: 30
  },
  score: {
    fontSize: 35,
    color: secondary,
    fontWeight: 'bold',
    paddingBottom: 30
  },
  deckSubHeaderText: {
    fontSize: 16,
    color: tenary
  },
  buttonOptions: {
    padding: 100
  }
})
