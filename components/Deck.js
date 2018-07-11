import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style/style'
import Card from './Card'
import NewCard from './NewCard'


class Deck extends React.Component {
  handleonPress() {
    //this function handle the link to the deck page
    const { navigation } = this.props
    navigation.navigate('Card')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleonPress()}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Deck
