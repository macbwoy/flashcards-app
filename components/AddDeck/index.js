import React, { Component } from "react"
import { View, Keyboard, KeyboardAvoidingView, Text, Alert } from "react-native"
import BorderButton from "../BorderButton/index"
import BorderTextInput from "../BorderTextInput/index"
import styles from "./styles"
import { primary } from "../../utils/colors"
import { connect } from "react-redux"
import { addDeck } from "../../actions"
import { createDeck } from "../../utils/api"

class AddDeck extends Component {
	static navigationOptions = {
		title: "New Deck"
	}

	state = {
		title: ""
	}

	resetFields = () => {
		this.setState({
			title: ""
		})
		Keyboard.dismiss()
	}

	alertBox = options => {
		const { navigation, storeDeck } = this.props
		this.resetFields()

		options.title === "Confirm"
			? Alert.alert(
					options.title,
					options.msg,
					[
						{
							text: "Cancel",
							onPress: () => console.log("Cancel Pressed"),
							style: "cancel"
						},
						{
							text: "OK",
							onPress: () => {
								storeDeck(options.data)

								navigation.navigate("Deck", options.navParams)
							}
						}
					],
					{ cancelable: false }
			  )
			: Alert.alert(options.title, options.msg)
	}

	onSumbit = () => {
		let { title } = this.state
		const { decks } = this.props

		title = title.toLowerCase().trim()
		const deckParams = { title, questions: [] }
		const newDeck = {
			[title]: deckParams
		}

		if (!title) {
			return
		}

		if (decks[title]) {
			this.alertBox({
				title: "Error",
				msg: "Can't Store Duplicate Deck title!"
			})
			this.resetFields()
			return
		}
		this.alertBox({
			title: "Confirm",
			msg: "Press OK to add new deck",
			navParams: deckParams,
			data: newDeck
		})
	}

	render() {
		const { title } = this.state
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<View>
					<Text style={styles.headerText}>
						What is the title of your new deck?
					</Text>
					<BorderTextInput
						placeholder="Deck Title"
						value={title}
						onChangeText={text => this.setState({ title: text })}
					/>
				</View>
				<View style={{ padding: 50 }}>
					<BorderButton
						text="Create Deck"
						onPress={this.onSumbit}
						color="#fff"
						backgroundColor={primary}
					/>
				</View>
			</KeyboardAvoidingView>
		)
	}
}

const mapStateToProps = state => ({
	decks: state
})

const mapDispatchToProps = dispatch => {
	return {
		storeDeck: newDeck => {
			dispatch(addDeck(newDeck))
			createDeck(newDeck)
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddDeck)
