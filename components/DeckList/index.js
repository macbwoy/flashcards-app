import React, { Component } from "react"
import { TouchableOpacity, View, Text } from "react-native"
import styles from "./styles"
import { purple } from "../../utils/colors"

class DeckList extends Component {
	static navigationOptions = {
		title: "Deck List",
		headerTintColor: "#fff",
		headerStyle: {
			backgroundColor: purple
		}
	}

	state = {}

	onPressHandler = () => {
		console.log("Hello World")
	}

	renderDeckButton = () => (
		<TouchableOpacity onPress={this.onPressHandler} style={styles.button}>
			<Text style={styles.deckHeaderText}>Deck 1</Text>
			<Text style={styles.deckSubHeaderText}>0 cards</Text>
		</TouchableOpacity>
	)

	render() {
		return (
			<View style={styles.container}>
				{this.renderDeckButton()}
				{this.renderDeckButton()}
			</View>
		)
	}
}

export default DeckList
