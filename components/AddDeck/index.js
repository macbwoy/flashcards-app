import React, { Component } from "react"
import { View, Text } from "react-native"
import BorderButton from "../BorderButton/index"
import BorderTextInput from "../BorderTextInput/index"
import styles from "./styles"

class AddDeck extends Component {
	state = {
		deckTitle: ""
	}
	onSumbit = () => {
		console.log(JSON.stringify(this.state))
		this.resetFields()
	}

	resetFields = () => {
		this.setState({
			deckTitle: ""
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.headerText}>
						What is the title of your new deck?
					</Text>
					<BorderTextInput
						placeholder="Deck Title"
						value={this.state.answerText}
						onChangeText={text => this.setState({ deckTitle: text })}
					/>
				</View>
				<View style={{ padding: 50 }}>
					<BorderButton
						text="Create Deck"
						onPress={this.onSumbit}
						color="#fff"
						backgroundColor="#000"
					/>
				</View>
			</View>
		)
	}
}

export default AddDeck
