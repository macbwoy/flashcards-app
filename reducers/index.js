import { ADD_DECK, RECIEVE_DECKS, ADD_QUESTION } from "../actions"

function decks(state = {}, action) {
	switch (action.type) {
		case RECIEVE_DECKS:
			return {
				...state,
				...action.decks
			}
		case ADD_DECK:
			return {
				...state,
				...action.deck
			}
		case ADD_QUESTION:
			const { title, questions, questionText, answerText } = action.params
			const newQuestions = questions.concat([{ questionText, answerText }])

			return {
				...state,
				[title]: { ...state[title], questions: newQuestions }
			}
		default:
			return state
	}
}

export default decks
