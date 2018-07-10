import React from 'react'
import { Text, View, Platform } from 'react-native'
import { connect } from 'react-redux'

import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api'
import styles from '../style/style'
import Deck from './Deck'

class DeckList extends React.Component {

  async componentDidmount () {
    //here we import the data to generate the list from asyncstorage
    const { dispatch } = this.props
    const data = await getDecks()
    dispatch(fetchDecks(JSON.parse(data)))
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        { decks
          ? <Text>Add a first deck</Text>
          : decks.map(deck =>
            (<View>
              <Text>{deck.title}</Text>
            </View>))
        }
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
