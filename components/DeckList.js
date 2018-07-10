import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api'
import styles from '../style/style'
import Deck from './Deck'

class DeckList extends React.Component {

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        { !decks
          ? <Text>Add a first deck</Text>
          : decks.map(deck => (
            <TouchableOpacity
              key={deck.title}>
              <Deck
                title={deck.title}
                cards={deck.questions}
              />
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

function mapStateToProps({decks}) {
  return {
    decks: Object.keys(decks).map(key => decks[key])
  }
}

export default connect(mapStateToProps)(DeckList)
