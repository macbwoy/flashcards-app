import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './styles'

const DeckList = () => {
  const onPressHandler = () => {
    console.log('Hello World')
  }

  const renderDeckButton = () => (
    <TouchableOpacity onPress={onPressHandler} style={styles.button}>
      <Text style={styles.deckHeaderText}>
        Deck 1
      </Text>
      <Text style={styles.deckSubHeaderText}>
        0 cards
      </Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      {renderDeckButton()}
      {renderDeckButton()}
    </View>
  )
}

export default DeckList
