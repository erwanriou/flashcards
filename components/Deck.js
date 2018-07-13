import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { ionicons } from '@expo/vector-icons'

import styles from '../style/style'
import Card from './Card'
import NewCard from './NewCard'


class Deck extends React.Component {
  handleStartQuiz() {
    //this function handle the link to the deck page
    const { navigation } = this.props
    navigation.navigate('Card', {
      deckId: navigation.state.params.deckId
    })
  }

  handleAddCard(deckId) {
    //this function handle the link to the NewCard component
    const { navigation } = this.props
    navigation.navigate('NewCard', {
      deckId
    })
  }

  render() {
    const { decks, navigation } = this.props
    const deck = decks[navigation.state.params.deckId]
    return (
      <View style={styles.deckDetail}>
        <View style={styles.container}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text>this deck contain {deck.questions.length} cards</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleAddCard(deck.title)}>
            <Text>Add a Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleStartQuiz()}>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        </View>
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
