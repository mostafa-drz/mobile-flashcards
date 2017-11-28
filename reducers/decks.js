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
            return{
                ...state,
                decks:state.decks.reduce((accu,current) => {
                    return current.key!==action.deckName ? accu.concat(current) : 
                            accu.concat({
                                ...current,
                                questions:current.questions.concat(action.question)
                            })
                },[])
            }
        default:
            return state;
    }
}

export default decks