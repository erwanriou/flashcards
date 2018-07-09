import React from 'react';
import { Text, View, Platform, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'

import styles from './style/style'
import reducer from './reducers'


function FlashcardsStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor='#24292e' barStyle='light-content' />
          <View style={styles.container}>
            <Text>Incoming Flashcard Application</Text>
          </View>

        </View>
      </Provider>
    )
  }
}
