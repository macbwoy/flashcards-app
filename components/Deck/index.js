import React, { Component } from "react"
import { TouchableOpacity, View, Text, Button } from "react-native"
import BorderButton from "../BorderButton/index"
import styles from "./styles"
import { primary, white } from "../../utils/colors"
import { Ionicons } from "@expo/vector-icons"

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

	onPressHandler = () => {
		console.log("Hello World")
	}

	addCardHandler = () => {
		const { navigate } = this.props.navigation

		navigate("AddCard")
	}
	render() {
		const { title, questions } = this.props.navigation.state.params

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
						onPress={this.onPressHandler}
						color="#fff"
						backgroundColor={primary}
					/>
					<TouchableOpacity onPress={this.onPressHandler}>
						<Text style={styles.deleteDeckText}>Delete Deck</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

export default DeckView
