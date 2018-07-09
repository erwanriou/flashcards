import React from 'react'
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
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
    const { dispatch, navigation } = this.props
    dispatch(addDeck(title))
    navigation.navigate('DeckList')
    //send to database
    this.setState({title: ''})
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
        <TouchableOpacity onPress={this.addDeck}>
          <Text>Save</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeck)
