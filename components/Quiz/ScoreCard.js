import React, { Component } from "react"
import { View, Text } from "react-native"
import BorderButton from "../BorderButton/index"
import { connect } from "react-redux"
import styles from "./styles"
import { primary, white } from "../../utils/colors"
import { withNavigation } from "react-navigation"

class ScoreCard extends Component {
	backToDeck = () => {
		const { deckTitle, decks, navigation } = this.props
		navigation.navigate("Deck", decks[deckTitle])
	}

	render() {
		const { correctAnswers, totalQuestions, reset } = this.props
		console.log(this.props.navigation)
		return (
			<View style={styles.container}>
				<View
					style={[
						styles.group,
						{ justifyContent: "center", alignItems: "center", flex: 1 }
					]}
				>
					<Text style={styles.text}>Your Score:</Text>
					<Text style={styles.score}>
						{`${(correctAnswers / totalQuestions) * 100}%`}
					</Text>
				</View>

				<View style={styles.buttonOptions}>
					<BorderButton
						text="Restart Quiz"
						onPress={reset}
						color={primary}
						borderColor={primary}
						backgroundColor={white}
					/>
					<BorderButton
						text="Back to Deck"
						onPress={this.backToDeck}
						color="#fff"
						backgroundColor={primary}
					/>
				</View>
			</View>
		)
	}
}
const mapStateToProps = state => ({
	decks: state
})

export default withNavigation(connect(mapStateToProps)(ScoreCard))
