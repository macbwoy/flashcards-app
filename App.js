import React from 'react'
import { Platform } from 'react-native'
import DeckList from './components/DeckList/index'
import Deck from './components/Deck/index'
import AddCard from './components/AddCard/index'
import AddDeck from './components/AddDeck/index'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { white, purple } from './utils/colors'

const DeckStack = createStackNavigator(
  {
    DeckList: { screen: DeckList },
    Deck: { screen: Deck },
    AddCard: { screen: AddCard }
  }
// {headerMode: 'none'}
)
const AddDeckStack = createStackNavigator(
  {
    AddDeck: { screen: AddDeck }
  }
// {headerMode: 'none'}
)

const HomeStack = createBottomTabNavigator(
  {
    Decks: {
      screen: DeckStack,
      navigationOptions: () => ({
        title: 'Deck List',
        tabBarLabel: 'Deck List',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-list-box' size={30} color={tintColor} />
        )
      })
    },
    AddDeck: {
      screen: AddDeckStack,
      navigationOptions: () => ({
        title: 'Add Deck',
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='plus-square' size={30} color={tintColor} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      tabStyle: {},
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const AppContainer = createAppContainer(HomeStack)
export default class App extends React.Component {
  render () {
    return <AppContainer />
  }
}
