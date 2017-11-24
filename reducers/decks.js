import {
    ADD_DECKS,
    ADD_NEW_DECK,
    GET_ALL_DECKS,
    ADD_NEW_QUESTION
} from '../actions/types'

function decks(state = { decks: [] }, action) {
    switch (action.type) {
        case ADD_DECKS:
            const newSate = {...state,
                decks: Object.keys(action.decks).map(
                    key => ({ key: key, ...action.decks[key] })
                )
            };
            return newSate;
        case ADD_NEW_DECK:
            return {...state,
                decks: state.decks.concat({
                    key: action.name,
                    title: action.name,
                    questions: []
                })
            };
        case ADD_NEW_QUESTION:
            const changedDeck = state.decks.filter(deck => deck.key === action.deckName)[0];
            changedDeck.questions = changedDeck.questions.concat(action.question)
            return {
                ...state,
                decks: state.decks.filter((deck) => (deck.key != action.deckName)).concat(
                    changedDeck
                )
            };
        default:
            return state;
    }
}

export default decks