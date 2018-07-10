import React from 'react'
import { Text, View } from 'react-native'

class Deck extends React.Component {

  render() {
    const { deck } = this.props
    return (
      <View>
        <Text>{deck.title}</Text>
      </View>
    )
  }
}

export default Deck
