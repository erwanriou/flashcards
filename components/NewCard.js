import React from 'react'
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style/style'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'


class NewCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
    }

    this.addCard = this.addCard.bind(this);
  }

  addCard() {
    //this function will be in charge to create a new card and send the data to async storage
    const { question, answer } = this.state
    const { dispatch, navigation } = this.props

    const deckId = (navigation.state.params.deckId).toLowerCase()
    dispatch(addCard(deckId, { question, answer }))
    addCardToDeck(deckId, { question, answer })
    navigation.goBack()
  }

  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.deckDetail}>
        <View style={styles.container}>
          <Text
            style={styles.title}>
            Create your New Card
          </Text>
          <TextInput
            style={styles.newCardInput}
            placeholder='Question'
            multiLine={true}
            numberOfLines={4}
            onChangeText={question => this.setState({question})}
            value={question}
          />
          <TextInput
            style={styles.newCardInput}
            placeholder='Answer'
            multiLine={true}
            numberOfLines={4}
            onChangeText={answer => this.setState({answer})}
            value={answer}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.addCard}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewCard)
