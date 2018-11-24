import React, { Component } from "react"
import { View, Keyboard, KeyboardAvoidingView, Text } from "react-native"
import BorderButton from "../BorderButton/index"
import BorderTextInput from "../BorderTextInput/index"
import styles from "./styles"
import { purple } from "../../utils/colors"

class AddDeck extends Component {
	static navigationOptions = {
		title: "New Deck",
		headerTintColor: "#fff",
		headerStyle: {
			backgroundColor: purple
		}
	}

	state = {
		deckTitle: ""
	}

	componentDidMount() {
		console.log(this.props.navigation)
	}

	onSumbit = () => {
		console.log(JSON.stringify(this.state))
		this.resetFields()
		Keyboard.dismiss()
	}

	resetFields = () => {
		this.setState({
			deckTitle: ""
		})
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<View>
					<Text style={styles.headerText}>
						What is the title of your new deck?
					</Text>
					<BorderTextInput
						placeholder="Deck Title"
						value={this.state.deckTitle}
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
			</KeyboardAvoidingView>
		)
	}
}

export default AddDeck
