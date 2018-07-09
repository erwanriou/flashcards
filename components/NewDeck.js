import React from 'react'
import { Text, View, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { addDeck } from '../actions'
import styles from '../style/style'

class NewDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

    this.addDeck = this.addDeck.bind(this);
  }


  addDeck() {
    //this function will be in charge to create a new deck and send the data to async storage
    const { title } = this.state
    //dispatch decks
    //return to home
    //send to database
    //reset state
  }

  render() {
    const { title } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          placeholder='write your deck title here'
          autoFocus={true}
          onChangeText={title => this.setState({title})}
          value={title}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeck)
