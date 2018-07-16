import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style/style'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      flipCard: false,
      completedQuiz: false,
      score: 0,
    }
    this.handleFlipCard = this.handleFlipCard.bind(this)
    this.handleNextQuestion = this.handleNextQuestion.bind(this)
    this.handleResetQuiz = this.handleResetQuiz.bind(this)
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this)
  }

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification)
  }

  handleCorrectAnswer() {
    this.setState({
      score: this.state.score +1
    })
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
        completedQuiz:  true,
      })
      clearLocalNotification().then(setLocalNotification)
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  handleResetQuiz() {
    const {  index } = this.state
    this.setState({
      completedQuiz: false,
      index: 0,
      score: 0,
    })
  }

  render() {
    const { flipCard, completedQuiz, index, score } = this.state
    const { answer, question, questions } = this.props
    return (
      <View style={styles.quiz}>
        { questions.length === 0
          ? <View>
              <Text style={{textAlign: 'center', marginTop: 100}}>Add a question first</Text>
            </View>
          : <View>
              <Text style={{textAlign: 'center', margin: 10}}>Question number {index + 1}/{questions.length}</Text>
              { completedQuiz
                ? <View>
                    <Text style={[styles.title, {margin: 100}]}>QUIZ COMPLETED</Text>
                    <Text style={{textAlign: 'center'}}>Your result is {Math.round(score*100/questions.length)}%</Text>
                  </View>

                : flipCard
                    ? <Text style={styles.title}>{questions[index].answer}</Text>
                    : <Text style={styles.title}>{questions[index].question}</Text>
              }
            </View>
        }
        { completedQuiz === true || questions.length  === 0
          ? null
          : <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.handleNextQuestion()
                }}>
                <Text>INCORRECT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.handleCorrectAnswer()
                  this.handleNextQuestion()
                }}>
                <Text>CORRECT</Text>
              </TouchableOpacity>
            </View>
        }
        { completedQuiz === true
          ? <View style={styles.quizQuestion}>
              <TouchableOpacity
                style={styles.quizButton}
                onPress={this.handleResetQuiz}>
                <Text>Reset Quiz</Text>
              </TouchableOpacity>
            </View>
          : questions.length  === 0
            ? null
            : <View style={styles.quizQuestion}>
                <TouchableOpacity
                    style={styles.quizButton}
                    onPress={this.handleFlipCard}>
                    { flipCard
                        ? <Text>Check Question</Text>
                        : <Text>Check Answer</Text>
                    }
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.quizButton}
                    onPress={this.handleNextQuestion}>
                    <Text>Skip Question</Text>
                  </TouchableOpacity>
                </View>
        }
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
