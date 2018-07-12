import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { ionicons } from '@expo/vector-icons'

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
    const { decks, navigation } = this.props
    const deck = decks[navigation.state.params.deckId]
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleonPress()}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(Deck)
