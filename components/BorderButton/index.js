import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './styles'

const BorderButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={[styles.button, {backgroundColor: props.backgroundColor, color: props.color}]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BorderButton
