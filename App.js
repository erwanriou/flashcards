import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import styles from './style/style'
import reducer from './reducers'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

function FlashcardsStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Main = createBottomTabNavigator({
  //here are define the 2 elements of the bottom menu
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list' size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NewDeck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor}/>
    }
  }
}, {
  // Options for the menu are define in the folowing object.
  navigationOption: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 56,
      backgroundColor: '#24292e',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
})

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor='#24292e' barStyle='light-content' />
          <Main />
        </View>
      </Provider>
    )
  }
}
