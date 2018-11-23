import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import BorderButton from '../BorderButton/index'
import styles from './styles'

const DeckVew = () => {
  const onPressHandler = () => {
    console.log('Hello World')
  }

  return (
    <View style={styles.container}>
      <View style={styles.deckHeader}>
        <Text style={styles.deckHeaderText}>
          Deck 1
        </Text>
        <Text style={styles.deckSubHeaderText}>
          0 cards
        </Text>
      </View>
      <View>
        <BorderButton
          text='Add Card'
          onPress={onPressHandler}
          color='#000'
          backgroundColor='#fff' />
        <BorderButton
          text='Start Quiz'
          onPress={onPressHandler}
          color='#fff'
          backgroundColor='#000' />
        <TouchableOpacity onPress={onPressHandler}>
          <Text style={styles.deleteDeckText}>
            Delete Deck
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DeckVew
