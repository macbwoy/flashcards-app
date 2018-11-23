import React from 'react'
import AllDecks from './components/DeckList/index'
import Deck from './components/Deck/index'
import AddCard from './components/AddCard/index'
import AddDeck from './components/AddDeck/index'

export default class App extends React.Component {
  render () {
    return (
      <AddDeck/>
    )
  }
}
