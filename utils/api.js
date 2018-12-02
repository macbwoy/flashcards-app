import { AsyncStorage } from "react-native"

const DB_KEY = "DB:AsyncStorage_key"

const questionData = {
	math: {
		title: "math",
		questions: [
			{
				question: "What is the perimeter of a square",
				answer: "4 times the length of one side"
			},
			{
				question: "What is the area of a circle",
				answer: "πr²"
			}
		]
	}
}

const setInitialData = async () => {
	await AsyncStorage.setItem(DB_KEY, JSON.stringify(questionData))
	return questionData
}

export const getDecks = async () => {
	try {
		let data = await AsyncStorage.getItem(DB_KEY)
		if (!data) {
			data = await setInitialData()
		}
		return JSON.parse(data)
	} catch (error) {
		console.log(error)
	}
}

export const createDeck = deck => {
	return AsyncStorage.mergeItem(DB_KEY, JSON.stringify(deck))
}

export const removeDeck = async title => {
	const decks = await getDecks()
	let newDeck = {}
	for (deckTitle in decks) {
		if (deckTitle !== title) {
			newDeck[deckTitle] = decks[deckTitle]
		}
	}
	return AsyncStorage.setItem(DB_KEY, JSON.stringify(newDeck))
}

export const storeNewQuestion = async ({ card, deckName }) => {
	try {
		const decks = await getDecks()
		const newQuestions = decks[deckName].questions.concat([card])

		createDeck({
			[deckName]: {
				title: deckName,
				questions: newQuestions
			}
		})
	} catch (error) {
		console.log(error)
	}
}
