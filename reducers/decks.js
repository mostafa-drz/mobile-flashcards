import {
    ADD_DECKS,
    ADD_NEW_DECK,
    GET_ALL_DECKS
} from '../actions/types'

function decks(state = { decks: [] }, action) {
    switch (action.type) {
        case ADD_DECKS:
            return {
                ...state,
                decks: decks.concat(action.decks)
            }
        case ADD_NEW_DECK:
            return {
                ...state,
                decks: decks.concat({ key: action.name, title: action.name, questions: [] })
            }
        case GET_ALL_DECKS:
            return state.decks
        default:
            return state
    }
}

export default decks