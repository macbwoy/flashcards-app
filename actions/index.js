export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_DECK = 'REMOVE_DECK'

export function recieveDecks (decks) {
  return {type: RECIEVE_DECKS, decks}
}

export function addDeck (deck) {
  return {type: ADD_DECK, deck}
}

export function removeDeck (title) {
  return {type: REMOVE_DECK, title}
}

export function addQuestion (params) {
  return {type: ADD_QUESTION, params}
}
