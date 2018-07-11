import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    margin: 30,
    height: 45,
    width: '50%',
    borderRadius: 4,
    backgroundColor: '#737373',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deck: {
    padding: 15,
    margin: 15,
    height: 100,
    width: '80%',
    borderRadius: 4,
    backgroundColor: '#ea8c13',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
  },
  deckTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  deckSubTitle: {
    color: 'white',
    textAlign: 'center',
  },
  newDeckInput: {
    margin: 15,
  }
})

export default styles
