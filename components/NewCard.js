import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style/style'


class NewCard extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>NEW CARD</Text>
      </View>
    )
  }
}

export default NewCard
