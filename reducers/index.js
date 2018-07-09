import { ADD_DECK, ADD_CARD } from '../actions'

function cards (state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      }
    case ADD_CARD:
      return {
        ...state,
        ...action.card,
      }
    default:
      return state
  }
}

export default cards
