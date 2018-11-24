import React, { Component } from "react"
import { View, TextInput, Keyboard } from "react-native"
import styles from "./styles"

export default class BorderTextInput extends Component {
	state = {}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					{...this.props}
					style={styles.textInput}
					onSubmitEditing={Keyboard.dismiss}
				/>
			</View>
		)
	}
}
