import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style/style'


class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flipCard: false,
      completedQuiz: false,
    }
  }

  render() {
    const { flipCard, completedQuiz } = this.setState
    const { question, answer } = this.props
    return (
      <View style={styles.container}>
        { completedQuiz
          ? <Text>QUIZ COMPLETED</Text>
          : <Text>QUIZ NOT COMPLETED</Text>}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}

export default connect()(Card)
