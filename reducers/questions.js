import { ADD_NEW_QUESTION } from '../actions/types'

function questions(state = { decks: [] }, action) {
    switch (action.type) {
        case ADD_NEW_QUESTION:
            return {
                ...state,
                decks: state.decks.filter((deck) => deck.key !== action.deckName)
                    .concat(state.decks.filter((deck) => (deck.key === action.deckName))[0].questions
                        .concat(action.question))
            }

        default:
            return state
    }
}
export default questions