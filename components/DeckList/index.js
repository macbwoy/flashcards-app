import React, { Component } from "react"
import {
	TouchableOpacity,
	View,
	Text,
	ActivityIndicator,
	Keyboard,
	ScrollView
} from "react-native"
import styles from "./styles"
import { primary, secondary } from "../../utils/colors"
import * as API from "../../utils/api"
import { recieveDecks } from "../../actions"
import { connect } from "react-redux"

class DeckList extends Component {
	static navigationOptions = {
		title: "Deck List",
		headerTintColor: "#fff",
		headerStyle: {
			backgroundColor: primary
		}
	}
	state = {
		isLoading: true
	}

	async componentDidMount() {
		const { dispatch } = this.props
		const initialDecks = await API.getDecks()

		await dispatch(recieveDecks(initialDecks))
		this.setState({ isLoading: false })
		Keyboard.dismiss()
	}

	onPressHandler = item => {
		const { navigate } = this.props.navigation
		navigate("Deck", item)
	}

	renderDeckButton = item => (
		<View key={item.title} style={styles.button}>
			<TouchableOpacity onPress={() => this.onPressHandler(item)}>
				<Text style={styles.deckHeaderText}>{item.title.toUpperCase()}</Text>
				<Text style={styles.deckSubHeaderText}>{`${
					item.questions.length
				} cards`}</Text>
			</TouchableOpacity>
		</View>
	)

	render() {
		const { decks } = this.props
		const { isLoading } = this.state

		if (isLoading) {
			return (
				<View style={styles.spinner}>
					<ActivityIndicator size="large" color={secondary} />
				</View>
			)
		}

		return (
			<View style={[styles.container, { padding: 0 }]}>
				<ScrollView contentContainerStyle={styles.container}>
					{decks.map(deck => this.renderDeckButton(deck))}
				</ScrollView>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		decks: Object.values(state).sort((a, b) => a.title > b.title)
	}
}

export default connect(mapStateToProps)(DeckList)
