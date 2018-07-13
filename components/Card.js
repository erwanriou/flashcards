import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style/style'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      flipCard: false,
      completedQuiz: false,
    }
  }

  render() {
    const { flipCard, completedQuiz, index } = this.state
    const { answer, question, questions } = this.props
    return (
      <View style={styles.container}>
        { completedQuiz
          ? <Text>QUIZ COMPLETED</Text>

          : flipCard
              ? <Text>{questions[index].answer}</Text>
              : <Text>{questions[index].question}</Text>
        }
      </View>
    )
  }
}

function mapStateToProps(state, { navigation, decks, }) {

  const { deckId } = navigation.state.params
  const quiz = Object.values(state.decks[deckId])
  const questions = quiz[1]

  return {
    questions,
  }
}


export default connect(mapStateToProps)(Card)
