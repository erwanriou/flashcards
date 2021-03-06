import React from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api'
import styles from '../style/style'
import Deck from './Deck'

class DeckList extends React.Component {

  async componentDidMount() {
    //calling initial data from async storage
    const { dispatch } = this.props
    const data = await getDecks()
    dispatch(fetchDecks(JSON.parse(data)))
  }

  handleonPress(id) {
    //this function handle the link to the deck page
    const { navigation } = this.props
    const deckId = (id).toLowerCase()
    navigation.navigate('Deck', { deckId })
  }

  renderItem = ({ item: { questions, title }}) => {
    //function that display the decklist
    return (
      <View>
        <TouchableOpacity
          style={styles.deck}
          onPress={() => this.handleonPress(title)}>
          {title.length > 30 || title.length === 0
            ? <Text style={styles.title}>title too long or undefine</Text>
            : <Text style={styles.title}>{title}</Text>}
          <Text style={styles.deckSubTitle}>this deck has {questions.length} card(s)</Text>
          <Ionicons name='ios-arrow-round-forward' size={30}/>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { decks } = this.props
    return (
      <View>
        { !decks
          ? <Text style={{textAlign: 'center'}}>Add a first deck</Text>
          : <FlatList
              data={Object.values(decks)}
              keyExtractor={item => item.title}
              renderItem={this.renderItem}
            />
        }
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(DeckList)
