import { ADD_DECK, ADD_CARD, FETCH_DECKS } from '../actions'

function cards (state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        decks: action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [(action.title).toLowerCase()]: {
            title: action.title,
            questions: []
          }
        }
      }
    case ADD_CARD:
      const { id, card } = action;
      return {
        ...state,
        decks: {
          ...state.decks,
          [id]: {
            ...state.decks[id],
            questions: [...state.decks[id].questions, card]
          }
        }
      }
    default:
      return state
  }
}

 export default cards
