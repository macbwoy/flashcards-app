import { ADD_DECK, RECIEVE_DECKS, ADD_QUESTION, REMOVE_DECK } from "../actions"

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
		case REMOVE_DECK:
			const newState = Object.assign({}, state)
			delete newState[action.title]
			return newState

		case ADD_QUESTION:
			const { title, questions, question, answer } = action.params
			const newQuestions = questions.concat([{ question, answer }])

			return {
				...state,
				[title]: { ...state[title], questions: newQuestions }
			}
		default:
			return state
	}
}

export default decks
