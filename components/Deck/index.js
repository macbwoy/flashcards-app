import React, { Component } from "react"
import { TouchableOpacity, View, Text, Button } from "react-native"
import BorderButton from "../BorderButton/index"
import styles from "./styles"
import { primary, white } from "../../utils/colors"
import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import * as API from "../../utils/api"
import { removeDeck } from "../../actions"

class DeckView extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params

		return {
			title: `${title.toUpperCase()} Deck`,
			headerBackTitle: "Home",
			headerLeft: (
				<View style={{ paddingLeft: 10 }}>
					<TouchableOpacity onPress={() => navigation.navigate("DeckList")}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center"
							}}
						>
							<Ionicons name="ios-arrow-back" size={31} color={white} />
							<Text style={{ color: white, fontSize: 16, paddingLeft: 5 }}>
								Home
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			)
		}
	}

	state = {}

	startQuizHandler = () => {
		const { title } = this.props.navigation.state.params
		const { questions } = this.props.decks[title]
		const { navigate } = this.props.navigation

		navigate("Quiz", { questions, title })
	}

	addCardHandler = () => {
		const { title } = this.props.navigation.state.params
		const { questions } = this.props.decks[title]
		const { navigate } = this.props.navigation

		navigate("AddCard", { title, questions })
	}

	removeDeckHandler = () => {
		const { title } = this.props.navigation.state.params
		const { navigate } = this.props.navigation
		navigate("DeckList")
		this.props.removeDeck(title)
	}

	render() {
		const { title } = this.props.navigation.state.params
		console.log(this.props.decks[title])
		const { questions } = this.props.decks[title]
			? this.props.decks[title]
			: { questions: [] }
		return (
			<View style={styles.container}>
				<View style={styles.deckHeader}>
					<Text style={styles.deckHeaderText}>{`${title.toUpperCase()}`}</Text>
					<Text style={styles.deckSubHeaderText}>{`${
						questions.length
					} cards`}</Text>
				</View>
				<View>
					<BorderButton
						text="Add Card"
						onPress={this.addCardHandler}
						color={primary}
						borderColor={primary}
						backgroundColor={white}
					/>
					<BorderButton
						text="Start Quiz"
						onPress={this.startQuizHandler}
						color="#fff"
						backgroundColor={primary}
					/>
					<TouchableOpacity onPress={this.removeDeckHandler}>
						<Text style={styles.deleteDeckText}>Delete Deck</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	decks: state
})

const mapDispatchToProps = dispatch => {
	return {
		removeDeck: title => {
			API.removeDeck(title).then(() => {
				dispatch(removeDeck(title))
			})
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeckView)
