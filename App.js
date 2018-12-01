import React from 'react'
import { Platform } from 'react-native'
import DeckList from './components/DeckList/index'
import Deck from './components/Deck/index'
import AddCard from './components/AddCard/index'
import AddDeck from './components/AddDeck/index'
import Quiz from './components/Quiz/index'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { white, purple, secondary } from './utils/colors'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './reducers/index'

const QuizStack = createStackNavigator(
  {
    Quiz: { screen: Quiz }
  }, {
    headerMode: 'none'
  }
)

const DeckStack = createStackNavigator(
  {
    Deck: { screen: Deck},
    AddCard: { screen: AddCard }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: secondary
      }
    }
  }

)

const DeckListStack = createStackNavigator(
  {
    DeckList: { screen: DeckList }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: secondary
      }
    }
  }
)
const AddDeckStack = createStackNavigator(
  {
    AddDeck: { screen: AddDeck }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: secondary
      }
    }
  }
)

const HomeStack = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckListStack,
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
      activeTintColor: Platform.OS === 'ios' ? '#28587B' : white,
      inactiveTintColor: '#9FB4C7',
      tabStyle: {},
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? '#EEEEFF' : purple,
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

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeStack },
    Decks: { screen: DeckStack}
  }, {
    headerMode: 'none',
    headerBackTitleVisible: true
  }
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Quiz: {screen: QuizStack}
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
const store = createStore(mainReducer)

const AppContainer = createAppContainer(RootStack)
export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
