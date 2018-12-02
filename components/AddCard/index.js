import React, { Component } from "react"
import { View, Keyboard, Alert } from "react-native"
import BorderButton from "../BorderButton/index"
import BorderTextInput from "../BorderTextInput/index"
import styles from "./styles"
import { connect } from "react-redux"
import * as API from "../../utils/api"
import { addQuestion } from "../../actions"

class AddCard extends Component {
	static navigationOptions = () => {
		return {
			title: "Add Card"
		}
	}

	state = {
		questionText: "",
		answerText: ""
	}

	resetFields = () => {
		this.setState({
			questionText: "",
			answerText: ""
		})
		Keyboard.dismiss()
	}

	alertBox = options => {
		const { navigation, storeQuestions } = this.props
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
								storeQuestions(options.data)

								navigation.goBack()
							}
						}
					],
					{ cancelable: false }
			  )
			: Alert.alert(options.title, options.msg)
	}

	onSumbit = () => {
		const { questionText, answerText } = this.state
		const { title, questions } = this.props.navigation.state.params

		const data = {
			questionText,
			answerText,
			title,
			questions
		}

		if (!questionText.trim() || !answerText.trim()) {
			this.alertBox({
				title: "Error",
				msg: "Fields can't be empty!"
			})
			return
		}

		this.alertBox({
			title: "Confirm",
			msg: "Press OK to add new question",
			data
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<BorderTextInput
						placeholder="Question"
						value={this.state.questionText}
						onChangeText={text => this.setState({ questionText: text })}
					/>
					<BorderTextInput
						placeholder="Answer"
						value={this.state.answerText}
						onChangeText={text => this.setState({ answerText: text })}
					/>
				</View>
				<View style={{ padding: 50 }}>
					<BorderButton
						text="Submit"
						onPress={this.onSumbit}
						color="#fff"
						backgroundColor="#000"
					/>
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
		storeQuestions: params => {
			dispatch(addQuestion(params))
			API.storeNewQuestion({
				card: {
					question: params.questionText,
					answer: params.answerText
				},
				deckName: params.title
			})
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddCard)
