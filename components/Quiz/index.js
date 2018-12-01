import React, { Component } from "react"
import { View, Text, Button } from "react-native"
import BorderButton from "../BorderButton/index"
import styles from "./styles"
import { primary, white } from "../../utils/colors"
import ScoreCard from "./ScoreCard"

class Quiz extends Component {
	state = {
		correctAnswers: 0,
		toggleAnswer: false,
		questionIndex: 0
	}

	resetHandler = () => {
		this.setState({
			correctAnswers: 0,
			toggleAnswer: false,
			questionIndex: 0
		})
	}

	toggleAnswerHandler = () => {
		this.setState(prevState => ({
			toggleAnswer: !prevState.toggleAnswer
		}))
	}

	correctHandler = () => {
		this.setState(prevState => ({
			correctAnswers: prevState.correctAnswers + 1,
			questionIndex: prevState.questionIndex + 1
		}))
	}

	inCorrectHandler = () => {
		this.setState(prevState => ({
			questionIndex: prevState.questionIndex + 1
		}))
	}
	render() {
		const { questionIndex, correctAnswers, toggleAnswer } = this.state
		const { questions, title } = this.props.navigation.state.params

		if (questionIndex >= questions.length) {
			return (
				<ScoreCard
					correctAnswers={correctAnswers}
					totalQuestions={questions.length}
					deckTitle={title}
					reset={this.resetHandler}
				/>
			)
		}

		const questionView = (
			<View style={styles.textHeader}>
				<Text style={styles.text}>{`${
					questions[questionIndex].question
				}?`}</Text>
				<Button
					color="red"
					title="Show Answer"
					onPress={this.toggleAnswerHandler}
				/>
			</View>
		)

		const answerView = (
			<View style={styles.textHeader}>
				<Text style={styles.text}>{`${questions[questionIndex].answer}`}</Text>
				<Button title="Show Question" onPress={this.toggleAnswerHandler} />
			</View>
		)

		return (
			<View style={styles.container}>
				<View style={[styles.group, { justifyContent: "flex-start", flex: 1 }]}>
					<Text style={{ alignSelf: "flex-end", paddingRight: 20 }}>
						{questionIndex + 1} / {questions.length}
					</Text>
					{toggleAnswer ? answerView : questionView}
				</View>

				<View style={styles.buttonOptions}>
					<BorderButton
						text="Correct"
						onPress={this.correctHandler}
						color={primary}
						borderColor={primary}
						backgroundColor={white}
					/>
					<BorderButton
						text="Incorrect"
						onPress={this.inCorrectHandler}
						color="#fff"
						backgroundColor={primary}
					/>
				</View>
			</View>
		)
	}
}

export default Quiz
