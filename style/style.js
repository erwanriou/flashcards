import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck: {
    padding: 15,
    margin: 15,
    height: 150,
    width: '80%',
    borderRadius: 4,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
  deckDetail: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
  },
  quiz: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    marginBottom: 30,
    height: 45,
    width: 200,
    borderRadius: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
  quizButton: {
    padding: 15,
    height: 45,
    width: '40%',
    marginBottom: 30,
    margin: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  newDeckInput: {
    margin: 15,
  },
  newCardInput: {
    margin: 15,
    padding: 20,
  },
  quizQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default styles
