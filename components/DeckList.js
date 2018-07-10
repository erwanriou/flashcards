import React from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api'
import styles from '../style/style'
import Deck from './Deck'

class DeckList extends React.Component {

  async componentDidMount() {
    const { dispatch } = this.props
    const data = await getDecks()
    dispatch(fetchDecks(JSON.parse(data)))
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        { !decks
          ? <Text>Add a first deck</Text>
          : <FlatList
              data={Object.values(decks)}
              keyExtractor={item => item.title}
              renderItem={({ item: { questions, title } }) => {
                return (
                  <View>
                    <Deck
                      title={title}
                      question={questions.length} 
                    />
                  </View>
                )
              }}
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
