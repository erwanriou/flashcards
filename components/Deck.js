import React from 'react'
import { Text, View } from 'react-native'

class Deck extends React.Component {

  render() {
    const { title, question } = this.props
    return (
      <View>
        <Text>{title}</Text>
        <Text>this deck has {question} card(s)</Text>
      </View>
    )
  }
}

export default Deck
