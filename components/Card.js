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
    this.handleFlipCard = this.handleFlipCard.bind(this)
    this.handleNextQuestion = this.handleNextQuestion.bind(this)
  }

  handleFlipCard() {
    this.setState({
      flipCard: !this.state.flipCard
    })
  }

  handleNextQuestion() {
    const {  index } = this.state
    const { questions } = this.props
    if (questions.length === (index + 1)) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  render() {
    const { flipCard, completedQuiz, index } = this.state
    const { answer, question, questions } = this.props
    return (
      <View style={styles.deckDetail}>
        <Text>Question numero {index + 1}/{questions.length}</Text>
        { completedQuiz
          ? <Text>QUIZ COMPLETED</Text>

          : flipCard
              ? <Text>{questions[index].answer}</Text>
              : <Text>{questions[index].question}</Text>
        }
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleFlipCard}>
          { flipCard
              ? <Text>Check Question</Text>
              : <Text>Check Answer</Text>
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleNextQuestion}>
          <Text>Next Question</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation, decks }) {

  const { deckId } = navigation.state.params
  const quiz = Object.values(state.decks[deckId])
  const questions = quiz[1]

  return {
    questions,
  }
}


export default connect(mapStateToProps)(Card)
