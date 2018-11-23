import React, { Component } from "react"
import { View } from "react-native"
import BorderButton from "../BorderButton/index"
import BorderTextInput from "../BorderTextInput/index"
import styles from "./styles"

class AddCard extends Component {
	state = {
		questionText: "",
		answerText: ""
	}
	onSumbit = () => {
		console.log(JSON.stringify(this.state))
		this.resetFields()
	}

	resetFields = () => {
		this.setState({
			questionText: "",
			answerText: ""
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

export default AddCard
