import React from 'react'
import { Text, View, Platform } from 'react-native'

import styles from '../style/style'
import Deck from './Deck'

class DeckList extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>DeckList</Text>
        </View>
        <View>
          <Deck/>
        </View>
      </View>
    )
  }
}

export default DeckList
